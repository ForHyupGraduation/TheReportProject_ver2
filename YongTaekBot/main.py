
from crawling import CreateChromeDriver
from crawling.growthRates import DownloadGrowthDataSet
from crawling.growthRates import GetCompanyGrowthRates
from normalization.growthRates import DownloadNormalizedGrowthRates
from subFeatures.addTitle import AddInterestTitlesToInterestsCSVFile, AddGrowthRatesTitlesToNormalizedGrowthRatesCSVFile, AddSalesTitlesToSalesCSVFile, AddOperatingProfitsTitlesToOperatingProfitsCSVFile





upjongNumbers = [
    "263",
    "300",
    "325"
]

for upjongNumber in upjongNumbers:
    DownloadGrowthDataSet(upjongNumber)
    DownloadNormalizedGrowthRates(upjongNumber)
    AddGrowthRatesTitlesToNormalizedGrowthRatesCSVFile(upjongNumber)
    AddSalesTitlesToSalesCSVFile(upjongNumber)
    AddOperatingProfitsTitlesToOperatingProfitsCSVFile(upjongNumber)