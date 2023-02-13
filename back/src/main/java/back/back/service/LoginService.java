package back.back.service;

import back.back.domain.Member;
import back.back.repository.MemberRepository;
import back.back.web.LoginForm;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class LoginService {
    private final MemberRepository memberRepository;

    public void save(LoginForm loginForm) {
        String password = loginForm.getPassword();
        Member member = Member.getMember(loginForm.getEmail(), password, loginForm.getNickName());
    }

}
