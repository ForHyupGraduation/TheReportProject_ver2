from merging import InterestDataClass
from normalization import GetNormalizationValue

from normalization import INTEREST_DB_PATH_IN_DB
from normalization import NORMALIZED_INTEREST_DB_PATH_IN_DB

import math
import csv
import os

def GetInterestsData(companyCode):
    minPosts = math.inf
    maxPosts = 0

    minVolume = math.inf
    maxVolume = 0

    interests = []
    index = 0
    with open(f"{INTEREST_DB_PATH_IN_DB}/interest{companyCode}.csv", 'r', encoding='UTF-8') as csvfile:
        reader = csv.reader(csvfile)
        
        for row in reader:
            if index == 0:
                index += 1
                pass
            else:
                newInterest = InterestDataClass(row[0], row[1], row[2], float(row[3]), float(row[4]))
                if minPosts >= float(row[3]):
                    minPosts = float(row[3])
                if maxPosts <= float(row[3]):
                    maxPosts = float(row[3])

                if minVolume >= float(row[4]):
                    minVolume = float(row[4])
                if maxVolume <= float(row[4]):
                    maxVolume = float(row[4])

                interests.append(newInterest)
    
    return {
        "interests": interests,
        "minPosts": minPosts,
        "maxPosts": maxPosts,
        "minVolume": minVolume,
        "maxVolume": maxVolume
    }

def DownloadNormalizedInterests(companyCode):
    if os.path.exists(f"{INTEREST_DB_PATH_IN_DB}/interest{companyCode}.csv"):
        interests = GetInterestsData(companyCode)
        with open(f"{NORMALIZED_INTEREST_DB_PATH_IN_DB}/interest{companyCode}.csv", 'w', newline='', encoding='UTF-8') as csvfile:
            pass

        for interest in interests['interests']:
            normalizedPosts = round(GetNormalizationValue(
                interest.posts,
                interests['minPosts'],
                interests['maxPosts']
            ), 2)
            normalizedVolume = round(GetNormalizationValue(
                interest.volume,
                interests['minVolume'],
                interests['maxVolume']
            ), 2)

            with open(f"{NORMALIZED_INTEREST_DB_PATH_IN_DB}/interest{companyCode}.csv", 'a', newline='', encoding='UTF-8') as csvfile:
                writer = csv.writer(csvfile)
                writer.writerow([
                    interest.companyName,
                    companyCode,
                    interest.companyDate,
                    normalizedPosts,
                    normalizedVolume
                ])
        print(f"[+] Success To Download normalizedInterest{companyCode}.csv")
        
    else:
        print(f"[-] There is no file {INTEREST_DB_PATH_IN_DB}/interest{companyCode}.csv")
        pass

    