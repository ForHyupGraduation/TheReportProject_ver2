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

def AddOperatingProfitsTitlesToOperatingProfitsCSVFile(upjongNumber):
    operatingProfitsInfos = []
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

def AddGrowthRatesTitlesToNormalizedGrowthRatesCSVFile(upjongNumber):
    growthRatesInfos = []
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

def AddTitleToMinMaxCSVFile():
    companyInfos = []
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

def AddInterestTitlesToInterestsCSVFile(companyCode, isNormalized):
    interests = []
    if isNormalized:
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

def AddInterestTitle():
    interestFileNames = []
    for path in os.listdir("../DB/interests"):
        if path.endswith(".csv"):
            interestFileNames.append(path)

    for interestFileName in interestFileNames:
        interests = []
        with open(f"../DB/interests/{interestFileName}", 'r', encoding='UTF-8') as csvfile:
            reader = csv.reader(csvfile)
            for row in reader:
                interests.append(row)
        
        with open(f"../DB/interests/{interestFileName}", 'w', encoding='UTF-8', newline='') as csvfile:
            writer = csv.writer(csvfile)
            writer.writerow(interestTitle)
            for interest in interests:
                writer.writerow(interest)
    print("[+] Success To Add Title")

def AddNormalizedGrowthRatesTitle():
    growthRatesFileNames = []

    for path in os.listdir("../DB/normalizedGrowthRates"):
        if path.endswith('.csv'):
            growthRatesFileNames.append(path)
    
    for growthRatesFileName in growthRatesFileNames:
        growthRates = []
        with open(f"../DB/normalizedGrowthRates/{growthRatesFileName}", 'r', encoding='UTF-8') as csvfile:
            reader = csv.reader(csvfile)
            for row in reader:
                growthRates.append(row)
        
        with open(f'../DB/normalizedGrowthRates/{growthRatesFileName}', 'w', encoding='UTF-8', newline='') as csvfile:
            writer = csv.writer(csvfile)
            writer.writerow(normalizedGrowth)
            for growthRate in growthRates:
                writer.writerow(growthRate)
    
    print("[+] Success To Add Growth Rates")

def AddNormalizedInterestsTitle():
    interestsFileNames = []
    
    for path in os.listdir("../DB/normalizedInterests"):
        if path.endswith(".csv"):
            interestsFileNames.append(path)

    for interestsFileName in interestsFileNames:
        interests = []
        index = 0

        with open(f"../DB/normalizedInterests/{interestsFileName}", 'r', encoding='UTF-8') as csvfile:
            reader = csv.reader(csvfile)
            for row in reader:
                if index > 0:
                    interests.append(row)
                index += 1
        
        with open(f"../DB/normalizedInterests/{interestsFileName}", 'w', encoding='UTF-8', newline='') as csvfile:
            writer = csv.writer(csvfile)
            writer.writerow(interestTitle)
            for interest in interests:
                writer.writerow(interest)
    
    print("[+] Success To Add Title")