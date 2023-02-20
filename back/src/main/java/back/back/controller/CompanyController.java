package back.back.controller;

import back.back.TestMapping;
import back.back.crawler.BuzzInfoCrawler;
import back.back.crawler.NewsCrawler;
import back.back.domain.Company;
import back.back.domain.Member;
import back.back.domain.News;
import back.back.domain.PortFolio;
import back.back.request.SendRequest;
import back.back.service.CompanyService;
import back.back.service.ProfileService;
import back.back.web.*;
import back.back.web.portfolio.MyProfileDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
public class CompanyController {
    private final CompanyService companyService;
    private final SendRequest sendRequest;
    private final ProfileService profileService;

    @GetMapping("/home")
    public HomeDto home(@RequestParam String categoryName) {
       return companyService.home(categoryName);
    }

    @GetMapping("/test")
    public CompanyDto test(@RequestParam String companyName){
        CompanyDto companyDto = companyService.mainPage(companyName);
        List<CompanySimpleInfo> simpleInfos = companyService.getSimpleCompanyInfo(companyDto.getCategoryName());
        companyDto.setCompanySimpleInfos(simpleInfos);
        return companyDto;
    }


    @GetMapping("/news/add2")
    public Company addData2(@RequestParam String companyName) throws IOException {
        BuzzInfoCrawler crawler = new BuzzInfoCrawler();
        FinancialDto financialDto = crawler.findBuzzInfo2(companyName);

        NewsCrawler crawler2 = new NewsCrawler(companyName);
        List<News> news = crawler2.titleParsing();

        Company save = companyService.save(financialDto, news, companyName);
        return save;
    }

    @GetMapping("/operate")
    public String operate() throws InterruptedException {
        sendRequest.sendRequest();
        return "ok";
    }

    @PostMapping("/test/add")
    public MyProfileDto test(@RequestBody TestMapping test) {
        log.info("test.id = {}", test.getId());
        log.info("test.companyName = {}", test.getCompanyName());
        Member member = profileService.addPortPolio(test.getId(), test.getCompanyName());
        List<PortFolio> portFolios = member.getPortFolios();
        for (PortFolio portFolio : portFolios) {
            log.info("port = {}", portFolio);
        }
        MyProfileDto myProfileDto = new MyProfileDto(member);

        return myProfileDto;
    }
}
