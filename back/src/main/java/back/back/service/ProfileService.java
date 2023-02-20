package back.back.service;

import back.back.domain.Company;
import back.back.domain.Member;
import back.back.domain.PortFolio;
import back.back.repository.CompanyRepository;
import back.back.repository.MemberRepository;
import back.back.repository.PortFolioRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

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
        PortFolio portFolio = portFolioRepository.save(Po                           rtFolio.makePortPolio(company));
        member.addPortFolios(portFolio);
        return member;
    }

    public Member removePortPolio(Long memberId, String companyName) {
        Member member = memberRepository
                .findById(memberId)
                .orElse(null);
        portFolioRepository.removeByCompanyName(companyName);
        return member;
    }
}
