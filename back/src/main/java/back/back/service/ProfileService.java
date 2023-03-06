package back.back.service;

import back.back.domain.Company;
import back.back.domain.Member;
import back.back.domain.PortFolio;
import back.back.repository.CompanyRepository;
import back.back.repository.MemberRepository;
import back.back.repository.PortFolioRepository;
import back.back.web.CompanyDto;
import back.back.web.CompanySimpleDto;
import back.back.web.ProfilePage;
import back.back.web.member.MemberJoinResult;
import back.back.web.portfolio.PortFolioDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class ProfileService {
    private final MemberRepository memberRepository;
    private final CompanyRepository companyRepository;
    private final PortFolioRepository portFolioRepository;

    public void test(Long memberId) {
        Member member = memberRepository.findById(memberId).orElse(null);
    }

    public Member addPortPolio(Long memberId, String companyName) {
        Member member = memberRepository.findById(memberId).orElse(null);
        Company company = companyRepository
                .findByCompanyName(companyName)
                .stream()
                .findFirst()
                .orElse(null);
        company.addSubscriber();
        PortFolio portFolio = portFolioRepository.save(PortFolio.makePortPolio(company));
        member.addPortFolios(portFolio);
        return member;
    }

    public Member removePortPolio(Long memberId, String companyName) {
        Member member = memberRepository
                .findById(memberId)
                .orElse(null);
        Company company = companyRepository
                .findByCompanyName(companyName)
                .stream()
                .findFirst()
                .orElse(null);
        company.removeSubscriber();
        portFolioRepository.deleteByCompanyName(companyName);
        return member;
    }


    // 테이블 교체 요망
    public ProfilePage getProfile(Long memberId) {
        //-- join companyId -- portPolioId, join
        // 1 ~ 3
        // category ,,
        MemberJoinResult joinResult = memberRepository.findById(memberId)
                .map(member -> new MemberJoinResult(member))
                .orElse(null);

        List<PortFolio> portFolios = portFolioRepository
                .findByMemberId(memberId);

        List<PortFolioDto> portFolioDtos = portFolios.stream()
                .map(portFolio -> new PortFolioDto(portFolio))
                .collect(Collectors.toList());

        List<String> collect = portFolios
                .stream()
                .map(portFolio -> portFolio.getCompanyName())
                .collect(Collectors.toList());

        //companyName 이랑 일치하는 회사 내용을 전달
        List<CompanySimpleDto> companySimpleDto = companyRepository.findAll()
                .stream()
                .filter(company -> collect.contains(company.getCompanyName()))
                .sorted((c1, c2) -> c2.getSubscribed() - c1.getSubscribed())
                .map(company -> new CompanySimpleDto(company))
                .limit(3)
                .collect(Collectors.toList());

        ProfilePage profilePage = new ProfilePage();
        profilePage.setResult(joinResult);
        profilePage.setPortFolioDtos(portFolioDtos);
        profilePage.setCompanySimpleDtos(companySimpleDto);
        return profilePage;
    }
}
