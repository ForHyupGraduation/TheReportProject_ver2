from crawling import CreateChromeDriver
from crawling.growthRates import GetUpjongs

def DownloadUpjongsCSVFile(driver):
    upjongs = GetUpjongs()
    