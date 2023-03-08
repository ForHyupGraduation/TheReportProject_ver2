from selenium.webdriver.common.by import By

from crawling import GetComapnyMainPageURL
from crawling import CreateChromeDriver
from crawling import GetRatios
from crawling import ChangeStringNumbersToFloatNumbers
from crawling import GetCompanyCodes

from crawling import companyGrowthRatesDataClass

from crawling import YEARLY_SALES_DB_PATH_IN_DB
from crawling import YEARLY_OPERATING_PROFITS_DB_PATH_IN_DB

from time import sleep
from random import randrange

import csv



def GetCompanyGrowthRates(driver, companyCode):
    companyName = None
    yearlySalesGrowthRates = []
    yearlyOperatingProfitsGrowthRates = []

    try:
        driver.get(GetComapnyMainPageURL(companyCode))
        sleep(randrange(3, 4))

        companyName = driver.find_element(By.XPATH, '//*[@id="middle"]/div[1]/div[1]/h2/a').text
        tbodyElement = driver.find_element(By.XPATH, '//*[@id="content"]/div[4]/div[1]/table/tbody')
        trElements = tbodyElement.find_elements(By.TAG_NAME, 'tr')

        yearlySales = []
        yearlyOperatingProfits = []

        for trElement in trElements:
            if "매출액" in trElement.text and "매출액(억" not in trElement.text:
                if len(trElement.text.split(' ')) == 11 or len(trElement.text.split(' ')) == 8:
                    yearlySales = ChangeStringNumbersToFloatNumbers(trElement.text.split(' ')[1:5])
                elif len(trElement.text.split(' ')) == 13 or len(trElement.text.split(' ')) == 12:
                    yearlySales = ChangeStringNumbersToFloatNumbers(trElement.text.split(' ')[1:4])
                elif len(trElement.text.split(' ')) == 9:
                    yearlySales = ChangeStringNumbersToFloatNumbers(trElement.text.split(' ')[1:4])

            if "영업이익" in trElement.text and "영업이익(억" not in trElement.text and "영업이익률" not in trElement.text and "영업이익증가율(%)" not in trElement.text:
                if len(trElement.text.split(' ')) == 11 or len(trElement.text.split(' ')) == 8:
                    yearlyOperatingProfits = ChangeStringNumbersToFloatNumbers(trElement.text.split(' ')[1:5])
                elif len(trElement.text.split(' ')) == 13 or len(trElement.text.split(' ')) == 12:
                    yearlyOperatingProfits = ChangeStringNumbersToFloatNumbers(trElement.text.split(' ')[1:4])
                elif len(trElement.text.split(' ')) == 9:
                    yearlyOperatingProfits = ChangeStringNumbersToFloatNumbers(trElement.text.split(' ')[1:4])

        yearlySalesGrowthRates = GetRatios(yearlySales)
        yearlyOperatingProfitsGrowthRates = GetRatios(yearlyOperatingProfits)

        averageYearlySalesGrowthRate = 0
        averageYearlyOperatingProfitsGrowthRate = 0

        if len(yearlySalesGrowthRates) != 0:
            averageYearlySalesGrowthRate = sum(yearlySalesGrowthRates) / len(yearlySalesGrowthRates)

        if len(yearlyOperatingProfitsGrowthRates) != 0:
            averageYearlyOperatingProfitsGrowthRate = sum(yearlyOperatingProfitsGrowthRates) / len(yearlyOperatingProfitsGrowthRates)
    
        if(len(yearlySales) == 3):
            yearlySales.append(0.0)
        if(len(yearlyOperatingProfits) == 3):
            yearlyOperatingProfits.append(0.0)

        return {
            "companyGrowthRatesData": companyGrowthRatesDataClass(companyName, companyCode, averageYearlySalesGrowthRate, averageYearlyOperatingProfitsGrowthRate),
            "yearlySales": yearlySales,
            "yearlyOperatingProfits": yearlyOperatingProfits
        }
    except:
        yearlySales = [0.0,0.0,0.0,0.0]
        yearlyOperatingProfits = [0.0,0.0,0.0,0.0]
        return {
            "companyGrowthRatesData": companyGrowthRatesDataClass(companyName, companyCode, 0, 0),
            "yearlySales": yearlySales,
            "yearlyOperatingProfits": yearlyOperatingProfits
        }



def DownloadGrowthDataSet(upjongNumber):
    driver = CreateChromeDriver()    
    companyCodes = GetCompanyCodes(driver=driver, upjongNumber=upjongNumber)


    with open(f"./data/growthRates/growthRates{upjongNumber}.csv", 'w', newline='', encoding='UTF-8') as csvfile:
        pass

    for companyCode in companyCodes:
        with open(f"{YEARLY_SALES_DB_PATH_IN_DB}/sales{upjongNumber}.csv", 'w', newline='', encoding='UTF-8') as csvfile:
            pass
        with open(f"{YEARLY_OPERATING_PROFITS_DB_PATH_IN_DB}/operatingProfits{upjongNumber}.csv", 'w', newline='', encoding='UTF-8') as csvfile:
            pass
    
    for companyCode in companyCodes:
        companyGrowthRates = GetCompanyGrowthRates(driver=driver, companyCode=companyCode, oneTime=False)
        companyGrowthRatesData = companyGrowthRates["companyGrowthRatesData"]
        yearlySales = companyGrowthRates["yearlySales"]
        yearlyOperatingProfits = companyGrowthRates["yearlyOperatingProfits"]
        with open(f"./data/growthRates/growthRates{upjongNumber}.csv", 'a', newline='', encoding='UTF-8') as csvfile:
            writer = csv.writer(csvfile)
            writer.writerow([
                companyGrowthRatesData.companyName, 
                companyGrowthRatesData.companyCode,
                companyGrowthRatesData.averageSalesGrowthRate,
                companyGrowthRatesData.averageOperatingProfitsGrowthRate
            ])
            pass
        with open(f"{YEARLY_SALES_DB_PATH_IN_DB}/sales{upjongNumber}.csv", 'a', newline='', encoding='UTF-8') as csvfile:
            writer = csv.writer(csvfile)
            
            companyName = companyGrowthRatesData.companyName
            yearlySales.insert(0, companyCode)
            yearlySales.insert(0, companyName)
            writer.writerow(yearlySales)
        with open(f"{YEARLY_OPERATING_PROFITS_DB_PATH_IN_DB}/operatingProfits{upjongNumber}.csv", 'a', newline='', encoding='UTF-8') as csvfile:
            writer = csv.writer(csvfile)
            
            companyName = companyGrowthRatesData.companyName
            yearlyOperatingProfits.insert(0, companyCode)
            yearlyOperatingProfits.insert(0, companyName)
            writer.writerow(yearlyOperatingProfits)

    driver.close()
