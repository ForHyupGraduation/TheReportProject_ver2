package back.back.service;

import back.back.domain.Company;
import back.back.domain.Member;
import back.back.domain.PortFolio;
import back.back.repository.CompanyRepository;
import back.back.repository.MemberRepository;
import back.back.repository.PortFolioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class ProfileService {
    private final MemberRepository memberRepository;
    private final CompanyRepository companyRepository;
    private final PortFolioRepository portFolioRepository;
    public void test(Long memberId) {
        Member member = memberRepository.findById(memberId).orElse(null);
    }

    public Member addPortPolio(Long memberId, String companyName) {
        Member member = memberRepository.findById(memberId).orElse(null);
        Company company = companyRepository.findByCompanyName(companyName).stream()
                .findFirst().orElse(null);
        company.addSubscriber();
        PortFolio portFolio = portFolioRepository.save(PortFolio.makePortPolio(company));
        member.addPortFolios(portFolio);
        return member;
    }
}