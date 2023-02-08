from crawling.post import DownloadPostDataSet
from crawling.volume import DownloadVolumeDataSet
from crawling.growthRates import DownloadGrowthDataSet, GetCompanyCodes
from crawling import CreateChromeDriver

from merging.interest import DownloadInterests

from normalization.interest import DownloadNormalizedInterests
from normalization.growthRates import DownloadNormalizedGrowthRates

from subFeatures.minMax import DownloadMinMaxUsingCompanyCodes, GetCompanyCodesInInterestsDB
from subFeatures.addTitle import AddTitleToMinMaxCSVFile, AddInterestTitlesToInterestsCSVFile, AddGrowthRatesTitlesToNormalizedGrowthRatesCSVFile, AddSalesTitlesToSalesCSVFile, AddOperatingProfitsTitlesToOperatingProfitsCSVFile
from subFeatures.upjongNumbers import DownloadUpjongNumbers

upjongNumber = "325"
postLastPageNumber = 10
volumeLastPageNumber = 10

companyCodes = GetCompanyCodes(CreateChromeDriver(), upjongNumber, oneTime=True)

def DownloadOneInterestsFileInDB(companyCode, postLastPageNumber, volumeLastPageNumber):
    DownloadPostDataSet(companyCode, postLastPageNumber)
    DownloadVolumeDataSet(companyCode, volumeLastPageNumber)
    DownloadInterests(companyCode)
    AddInterestTitlesToInterestsCSVFile(companyCode, isNormalized=False)
    DownloadNormalizedInterests(companyCode)
    AddInterestTitlesToInterestsCSVFile(companyCode, isNormalized=True)
    
def DownloadGrowthRatesWithSalesAndOperatingProfits(upjongNumber):
    DownloadGrowthDataSet(upjongNumber)
    DownloadNormalizedGrowthRates(upjongNumber)
    AddGrowthRatesTitlesToNormalizedGrowthRatesCSVFile(upjongNumber)
    AddSalesTitlesToSalesCSVFile(upjongNumber)
    AddOperatingProfitsTitlesToOperatingProfitsCSVFile(upjongNumber)

#for companyCode in companyCodes:
#    DownloadOneInterestsFileInDB(companyCode, postLastPageNumber, volumeLastPageNumber)
#    DownloadGrowthRatesWithSalesAndOperatingProfits(upjongNumber)

DownloadUpjongNumbers()