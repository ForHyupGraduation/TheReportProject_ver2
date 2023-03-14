package back.back.crawler;


import back.back.csvFileReader.CsvFileReader;
import back.back.domain.MinMaxRatio;
import back.back.domain.financialratio.FinancialRatio;
import back.back.domain.financialratio.OperatingProfit;
import back.back.domain.financialratio.Sales;
import back.back.domain.ratio.NormalizedGrowthRatio;
import back.back.domain.ratio.NormalizedInterestRatio;
import back.back.domain.ratio.PostAndTrading;
import back.back.web.FinancialDto;
import lombok.extern.slf4j.Slf4j;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import java.util.*;

@Slf4j
public class BuzzInfoCrawler{
    private WebDriver webDriver;
    private ChromeDriver chromeDriver = new ChromeDriver(new ChromeOptions().addArguments("--remote-allow-origins=*"));
    private CsvFileReader reader = new CsvFileReader();

    public FinancialDto findBuzzInfo2(String buzz) {
        Map<String, FinancialRatio> ratioMap = new HashMap<>();
        chromeDriver.get("https://finance.naver.com");
        WebElement searchInput = chromeDriver.findElement(By.id("stock_items"));
        searchInput.sendKeys(buzz+"   ");
        sleep();

        chromeDriver.findElement(By.cssSelector("#atcmp > div > div > ul > li:nth-child(1) > a")).click();
        WebElement element = chromeDriver.findElement(By.cssSelector("#middle > div.h_company > div.wrap_company > div > span.code"));
        String companyCode = element.getText(); // 123123456
        WebElement categoryElement = chromeDriver.findElement(By.cssSelector("#content > div.section.trade_compare > h4 > em > a"));
        String categoryName = categoryElement.getText(); //
        closeDriver();

        List<NormalizedInterestRatio> normalizedInterestRatios = reader.readInterestRatio(companyCode);
        List<PostAndTrading> postAndTradings = reader.postAndTrading(companyCode);
        NormalizedGrowthRatio growthRates = reader.readGrowthRatio( categoryName, companyCode);
        MinMaxRatio minMaxRatio = new MinMaxRatio(reader.readMinMaxRatio(companyCode));
        Sales sales = reader.sales(categoryName, companyCode);
        OperatingProfit operatingProfit = reader.operatingProfit(categoryName, companyCode);
        FinancialDto financialDto = new FinancialDto(companyCode, categoryName);

        financialDto.setSales(sales);
        financialDto.setGrowthRates(growthRates);
        financialDto.setMinMaxRatio(minMaxRatio);
        financialDto.setOperatingProfit(operatingProfit);
        financialDto.setPostAndTradings(postAndTradings);
        financialDto.setNormalizedInterestRatios(normalizedInterestRatios);
        return financialDto;
    }

    private void closeDriver() {
        chromeDriver.close();
        chromeDriver.quit();
        chromeDriver = null;
    }


    private void sleep() {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }
}
