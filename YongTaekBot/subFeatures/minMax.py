import os
import csv
import math

INTERESTS_IN_DB_PATH = "../DB/interests"
MIN_MAX_IN_DB_PATH = "../DB"

def GetCompanyCodesInInterestsDB():
    companyCodes = []
    for path in os.listdir(INTERESTS_IN_DB_PATH):
        if path.endswith(".csv"):
            companyCodes.append(path.split('.')[0].split('t')[2])
    return companyCodes

def DownloadMinMaxUsingCompanyCodes(companyCodes):
    with open(f"{MIN_MAX_IN_DB_PATH}/minMax.csv", 'w', newline='', encoding='UTF-8') as csvfile:
        pass

    for companyCode in companyCodes:
        minPosts = math.inf
        maxPosts = 0
        
        minVolume = math.inf
        maxVolume = 0
        
        companyName = None
        
        index = 0
        with open(f"{INTERESTS_IN_DB_PATH}/interest{companyCode}.csv", 'r', encoding='UTF-8') as csvfile:
            reader = csv.reader(csvfile)
            for row in reader:
                if index == 0:
                    index += 1
                    pass
                else:
                    companyName = row[0]
                    companyCode = row[1]

                    if minPosts >= float(row[3]):
                        minPosts = float(row[3])
                    if maxPosts <= float(row[3]):
                        maxPosts = float(row[3])

                    if minVolume >= float(row[4]):
                        minVolume = float(row[4])
                    if maxVolume <= float(row[4]):
                        maxVolume = float(row[4])
        
        with open(f"{MIN_MAX_IN_DB_PATH}/minMax.csv", 'a', newline='', encoding='UTF-8') as csvfile:
            writer = csv.writer(csvfile)
            writer.writerow([
                companyName,
                companyCode,
                minPosts,
                maxPosts,
                minVolume,
                maxVolume
            ])
    print("[+] Success To Download Min Max CSV File")