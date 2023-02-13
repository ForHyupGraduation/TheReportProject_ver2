package back.back.service;

import back.back.domain.Member;
import back.back.repository.MemberRepository;
import back.back.util.PasswordResolver;
import back.back.web.LoginForm;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class LoginService {
    private final MemberRepository memberRepository;

    public Member login(String email, String password) {
        password = PasswordResolver.getHash(password);
        return memberRepository.findByEmailAndPassword(email, password)
                .orElse(null);
    }

}
