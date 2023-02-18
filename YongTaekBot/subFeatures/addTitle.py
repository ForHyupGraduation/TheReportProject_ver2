import os
import csv

from subFeatures import MIN_MAX_IN_DB_PATH
from subFeatures import INTERESTS_IN_DB_PATH
from subFeatures import NORMALIZED_INTERESTS_IN_DB_PATH
from subFeatures import NORMALIZED_GROWTH_RATES_IN_DB_PATH
from subFeatures import YEARLY_OPERATING_PROFITS_DB_PATH_IN_DB
from subFeatures import YEARLY_SALES_PROFITS_DB_PATH_IN_DB

interestTitle = [
    "companyName",
    "companyCode",
    "date",
    "postPerDay",
    "tradingPerDay"
]

normalizedGrowthTitles = [
    "companyName",
    "companyCode",
    "averageSalesGrowthRate",
    "averageOperatingProfitsGrowthRate"
]

normalizedGrowth = [
    "companyName",
    "companyCode",
    "averageSalesGrowthRate",
    "averageOperatingProfitsGrowthRate"
]

minMaxCSVFileTitles = [
    "companyName",
    "companyCode",
    "minPosts",
    "maxPosts",
    "minVolume",
    "maxVolume"
]

operatingProfitsTitles = [
    "companyName",
    "companyCode",
    "operatingProfitsFourYearsAgo",
    "operatingProfitsThreeYearsAgo",
    "operatingProfitsTwoYearsAgo",
    "operatingProfitsOneYearsAgo"
]

salesTitles = [
    "companyName",
    "companyCode",
    "salesFourYearsAgo",
    "salesThreeYearsAgo",
    "salesTwoYearsAgo",
    "salesOneYearsAgo"
]

interestDbPath = "../../DB/interests"
normalizedGrowthRatesDBPath = "../../DB/normalizedGrowthRates"

def AddSalesTitlesToSalesCSVFile(upjongNumber):
    salesInfos = []
    if(os.path.exists(f"{YEARLY_SALES_PROFITS_DB_PATH_IN_DB}/sales{upjongNumber}.csv")):
        with open(f"{YEARLY_SALES_PROFITS_DB_PATH_IN_DB}/sales{upjongNumber}.csv", 'r', encoding='UTF-8') as csvfile:
            reader = csv.reader(csvfile)
            for row in reader:
                salesInfos.append(row)
        with open(f"{YEARLY_SALES_PROFITS_DB_PATH_IN_DB}/sales{upjongNumber}.csv", 'w', newline='', encoding='UTF-8') as csvfile:
            writer = csv.writer(csvfile)
            writer.writerow(salesTitles)
            for salesInfo in salesInfos:
                writer.writerow(salesInfo)
        print("[+] Success To Add Sales Titles To Sales CSV File")
    else:
        print(f"[-] There is no {YEARLY_SALES_PROFITS_DB_PATH_IN_DB}/sales{upjongNumber}.csv file")
    

def AddOperatingProfitsTitlesToOperatingProfitsCSVFile(upjongNumber):
    operatingProfitsInfos = []
    if(os.path.exists(f"{YEARLY_OPERATING_PROFITS_DB_PATH_IN_DB}/operatingProfits{upjongNumber}.csv")):
        with open(f"{YEARLY_OPERATING_PROFITS_DB_PATH_IN_DB}/operatingProfits{upjongNumber}.csv", 'r', encoding='UTF-8') as csvfile:
            reader = csv.reader(csvfile)
            for row in reader:
                operatingProfitsInfos.append(row)
        with open(f"{YEARLY_OPERATING_PROFITS_DB_PATH_IN_DB}/operatingProfits{upjongNumber}.csv", 'w', encoding='UTF-8', newline='') as csvfile:
            writer = csv.writer(csvfile)
            writer.writerow(operatingProfitsTitles)
            for operatingProfitsInfo in operatingProfitsInfos:
                writer.writerow(operatingProfitsInfo)
        print("[+] Success To Add Operating Profits Titles To Operating Profits CSV File")
    else:
        print(F"[-] There is no {YEARLY_OPERATING_PROFITS_DB_PATH_IN_DB}/operatingProfits{upjongNumber}.csv")

def AddGrowthRatesTitlesToNormalizedGrowthRatesCSVFile(upjongNumber):
    growthRatesInfos = []
    if(os.path.exists(f"{NORMALIZED_GROWTH_RATES_IN_DB_PATH}/growthRates{upjongNumber}.csv")):
        with open(f"{NORMALIZED_GROWTH_RATES_IN_DB_PATH}/growthRates{upjongNumber}.csv", 'r', encoding='UTF-8') as csvfile:
            reader = csv.reader(csvfile)
            for row in reader:
                growthRatesInfos.append(row)
        
        with open(f"{NORMALIZED_GROWTH_RATES_IN_DB_PATH}/growthRates{upjongNumber}.csv", 'w', encoding='UTF-8', newline='') as csvfile:
            writer = csv.writer(csvfile)
            writer.writerow(normalizedGrowthTitles)
            for growthRatesInfo in growthRatesInfos:
                writer.writerow(growthRatesInfo)

        print("[+] Success To Add Growth Rates Title To Normalized Growth Rates Title")
    else:
        print(f"[-] There is no {NORMALIZED_GROWTH_RATES_IN_DB_PATH}/growthRates{upjongNumber}.csv")

def AddTitleToMinMaxCSVFile():
    companyInfos = []
    if(os.path.exists(f"{MIN_MAX_IN_DB_PATH}/minMax.csv")):
        with open(f"{MIN_MAX_IN_DB_PATH}/minMax.csv", 'r', encoding='UTF-8') as csvfile:
            reader = csv.reader(csvfile)
            for row in reader:
                companyInfos.append(row)
        with open(f"{MIN_MAX_IN_DB_PATH}/minMax.csv", 'w', encoding='UTF-8', newline='') as csvfile:
            writer = csv.writer(csvfile)
            writer.writerow(minMaxCSVFileTitles)
            for companyInfo in companyInfos:
                writer.writerow(companyInfo)
        print("[+] Success To Add Titles To Min Max CSV File")
    else:
        print(f"[-] There is no {MIN_MAX_IN_DB_PATH}/minMax.csv")

def AddInterestTitlesToInterestsCSVFile(companyCode, isNormalized):
    interests = []
    if isNormalized:
        if (os.path.exists(f"{NORMALIZED_INTERESTS_IN_DB_PATH}/interest{companyCode}.csv")):
            with open(f"{NORMALIZED_INTERESTS_IN_DB_PATH}/interest{companyCode}.csv", 'r', encoding='UTF-8') as csvfile:
                reader = csv.reader(csvfile)
                for row in reader:
                    interests.append(row)
            with open(f"{NORMALIZED_INTERESTS_IN_DB_PATH}/interest{companyCode}.csv", 'w', encoding='UTF-8', newline='') as csvfile:
                writer = csv.writer(csvfile)
                writer.writerow(interestTitle)
                for interest in interests:
                    writer.writerow(interest)
            print(f"[+] Success To Add Interest Titles To interest{companyCode}.csv")
        else:
            print(f"[-] There is no {NORMALIZED_INTERESTS_IN_DB_PATH}/interest{companyCode}.csv")
    else:
        if (os.path.exists(f"{INTERESTS_IN_DB_PATH}/interest{companyCode}.csv")):
            with open(f"{INTERESTS_IN_DB_PATH}/interest{companyCode}.csv", 'r', encoding='UTF-8') as csvfile:
                reader = csv.reader(csvfile)
                for row in reader:
                    interests.append(row)
            with open(f"{INTERESTS_IN_DB_PATH}/interest{companyCode}.csv", 'w', encoding='UTF-8', newline='') as csvfile:
                writer = csv.writer(csvfile)
                writer.writerow(interestTitle)
                for interest in interests:
                    writer.writerow(interest)
            print(f"[+] Success To Add Interest Titles To interest{companyCode}.csv")
        else:
            print(f"[-] There is no {INTERESTS_IN_DB_PATH}/interest{companyCode}.csv")

def AddInterestTitle():
    interestFileNames = []
    for path in os.listdir("../DB/interests"):
        if path.endswith(".csv"):
            interestFileNames.append(path)

    for interestFileName in interestFileNames:
        interests = []
        if(os.path.exists(f"../DB/interests{interestFileName}")):
            with open(f"../DB/interests/{interestFileName}", 'r', encoding='UTF-8') as csvfile:
                reader = csv.reader(csvfile)
                for row in reader:
                    interests.append(row)
            print(f"[+] Success To Add Title")
        else:
            print(f"[-] There is no ../DB/interests/{interestFileName}")
        
        if(os.path.exists(f"../DB/interests{interestFileName}")):
            with open(f"../DB/interests/{interestFileName}", 'w', encoding='UTF-8', newline='') as csvfile:
                writer = csv.writer(csvfile)
                writer.writerow(interestTitle)
                for interest in interests:
                    writer.writerow(interest)
            print(f"[+] Success To Add Title")
        else:
            print(f"[-] There is no ../DB/interests{interestFileName}")


def AddNormalizedGrowthRatesTitle():
    growthRatesFileNames = []

    for path in os.listdir("../DB/normalizedGrowthRates"):
        if path.endswith('.csv'):
            growthRatesFileNames.append(path)
    
    for growthRatesFileName in growthRatesFileNames:
        growthRates = []
        if(os.path.exists(f"../DB/normalizedGrowthRates/{growthRatesFileName}")):
            with open(f"../DB/normalizedGrowthRates/{growthRatesFileName}", 'r', encoding='UTF-8') as csvfile:
                reader = csv.reader(csvfile)
                for row in reader:
                    growthRates.append(row)
            print(f"[+] Sucess To Add Growth Rates")
        else:
            print(f"[-] There is no ../DB/normalizedGrowthRates{growthRatesFileName}")
        
        if(os.path.exists(f"../DB/normalizedGrowthRates/{growthRatesFileName}")):
            with open(f'../DB/normalizedGrowthRates/{growthRatesFileName}', 'w', encoding='UTF-8', newline='') as csvfile:
                writer = csv.writer(csvfile)
                writer.writerow(normalizedGrowth)
                for growthRate in growthRates:
                    writer.writerow(growthRate)
            print(f"[+] Success To Add Growth Rates")
        else:
            print(f"[-] There is no ../DB/normalizedGrowthRates{growthRatesFileName}")

def AddNormalizedInterestsTitle():
    interestsFileNames = []
    
    for path in os.listdir("../DB/normalizedInterests"):
        if path.endswith(".csv"):
            interestsFileNames.append(path)

    for interestsFileName in interestsFileNames:
        interests = []
        index = 0

        if(os.path.exists(f"../DB/normalizedInterests/{interestsFileName}")):
            with open(f"../DB/normalizedInterests/{interestsFileName}", 'r', encoding='UTF-8') as csvfile:
                reader = csv.reader(csvfile)
                for row in reader:
                    if index > 0:
                        interests.append(row)
                    index += 1
            print(f"[+] Success To Add Title")
        else:
            print(f"[-] There is no ../DB/normalizedInterests/{interestsFileName}")
        
        if(os.path.exists(f"../DB/normalizedInterests/{interestsFileName}")):
            with open(f"../DB/normalizedInterests/{interestsFileName}", 'w', encoding='UTF-8', newline='') as csvfile:
                writer = csv.writer(csvfile)
                writer.writerow(interestTitle)
                for interest in interests:
                    writer.writerow(interest)
            print(f"[+] Success To Add Title")
        else:
            print(f"[-] There is no ../DB/normalizedInterests/{interestsFileName}")