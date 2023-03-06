from crawling import CreateChromeDriver
from crawling import GetUpjongs
from subFeatures import DB_PATH

from selenium.webdriver.common.by import By
from urllib.parse import urlparse

import os
import time
import random
import csv


def DownloadUpjongsTable():
    driver = CreateChromeDriver()
    upjongs = GetUpjongs(driver)
    
    with open(f"{DB_PATH}/upjongsTable.csv", 'w', encoding='UTF-8', newline='') as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(["upjongName", "UpjongNumber"])
        
        for upjongName in upjongs:
            writer.writerow([upjongName, upjongs[upjongName]])

    driver.close()


def DownloadUpjongNumbers():
    companyInfos = []
    companyCode = None
    for path in os.listdir("../DB/normalizedInterests"):
        companyCode = path.split('.')[0].split('t')[2]
        with open(f"../DB/normalizedInterests/interest{companyCode}.csv", 'r', encoding='UTF-8') as csvfile:
            reader = csv.reader(csvfile)
            index = 0
            for row in reader:
                if index == 1:
                    companyInfos.append({
                        "companyName": row[0],
                        "companyCode": companyCode,
                        "upjongNumer": -1
                    })
                    break
                index += 1
    
    driver = CreateChromeDriver()

    for companyInfo in companyInfos:
        driver.get(f'https://finance.naver.com/item/main.naver?code={companyInfo["companyCode"]}')
        time.sleep(random.randrange(3, 5))
        query = urlparse(driver.find_element(By.XPATH, '//*[@id="content"]/div[5]/h4/em/a').get_attribute('href')).query
        upjongNumber = query.split('&')[1].split('=')[1]
        companyInfo["upjongNumer"] = upjongNumber

    driver.close()

    exCompanyInfos = []
    index = 0
    with open(f"../DB/upjongNumbers/upjongNumbers.csv", 'r', newline='', encoding='UTF-8') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            if index == 0:
                index += 1
                pass
            else:
                exCompanyInfos.append(row)
    
    with open(f"../DB/upjongNumbers/upjongNumbers.csv", 'w', newline='', encoding='UTF-8') as csvfile:
        writer = csv.writer(csvfile)
    
        writer.writerow([
            "companyName",
            "companyCode",
            "upjongNumber"
        ])
        for exCompanyInfo in exCompanyInfos:
            writer.writerow(exCompanyInfo)
        for companyInfo in companyInfos:
            writer.writerow([
                companyInfo["companyName"],
                companyInfo["companyCode"],
                companyInfo["upjongNumer"]
        ])
    print("[+] Success To Download Upjongs In DB/upjongNumbers")
