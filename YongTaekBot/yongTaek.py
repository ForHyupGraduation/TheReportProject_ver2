from crawling.post import DownloadPostDataSet
from crawling.volume import DownloadVolumeDataSet
from crawling.growthRates import DownloadGrowthDataSet, GetCompanyCodes
from crawling import CreateChromeDriver
from crawling import CheckIsKonex

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
            isKonex = CheckIsKonex(companyCode)
            if(not isKonex):
                DownloadOneInterestsFileInDB(companyCode, self.postLastPageNumber, self.volumeLastPageNumber)
                DownloadGrowthRatesWithSalesAndOperatingProfits(self.upjongNumber)