package back.back.service;

import back.back.domain.Member;
import back.back.repository.MemberRepository;
import back.back.util.PasswordResolver;
import back.back.web.MemberForm;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;

    public Member save(MemberForm form) {
        String password = PasswordResolver.getHash(form.getPassword());
        Member member = Member.getMember(form.getEmail(), password, form.getNickName());
        Member save = memberRepository.save(member);
        return member;
    }

}
