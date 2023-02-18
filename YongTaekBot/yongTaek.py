from crawling.post import DownloadPostDataSet
from crawling.volume import DownloadVolumeDataSet
from crawling.growthRates import DownloadGrowthDataSet, GetCompanyCodes
from crawling import CreateChromeDriver

from merging.interest import DownloadInterests

from normalization.interest import DownloadNormalizedInterests
from normalization.growthRates import DownloadNormalizedGrowthRates

from subFeatures.addTitle import AddInterestTitlesToInterestsCSVFile, AddGrowthRatesTitlesToNormalizedGrowthRatesCSVFile, AddSalesTitlesToSalesCSVFile, AddOperatingProfitsTitlesToOperatingProfitsCSVFile

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

def DownloadAllData(upjongNumber, postLastPageNumber, volumeLastPageNumber):
    companyCodes = GetCompanyCodes(upjongNumber)
    for companyCode in companyCodes:
        try:
            DownloadOneInterestsFileInDB(companyCode, postLastPageNumber, volumeLastPageNumber)
            DownloadGrowthRatesWithSalesAndOperatingProfits(upjongNumber)
        except:
            pass

class YongTaekBot:
    def __init__(self, upjongNumber, postLastPageNumber, volumeLastPageNumber) -> None:
        self.companyCodes = []
        self.upjongNumber = upjongNumber
        self.postLastPageNumber = postLastPageNumber
        self.volumeLastPageNumber = volumeLastPageNumber
    def SetCompanyCodes(self):
        driver = CreateChromeDriver()
        self.companyCodes = GetCompanyCodes(driver, self.upjongNumber)
        driver.close()
    def DownloadAllData(self):
        for companyCode in self.companyCodes:
            DownloadOneInterestsFileInDB(companyCode, self.postLastPageNumber, self.volumeLastPageNumber)
            DownloadGrowthRatesWithSalesAndOperatingProfits(self.upjongNumber)
