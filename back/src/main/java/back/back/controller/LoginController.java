package back.back.controller;

import back.back.domain.Member;
import back.back.service.LoginService;
import back.back.web.LoginForm;
import back.back.web.SessionConst;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class LoginController {
    private final LoginService loginService;

    @PostMapping("/login")
    public String login(@RequestBody LoginForm loginForm,
                          BindingResult result,
                          HttpServletRequest request) {
        Member loginMember = loginService.login(loginForm.getEmail(), loginForm.getPassword());
        System.out.println(loginForm.getEmail().getClass().getName());
        System.out.println( loginForm.getPassword().getClass().getName());

        if (loginMember == null) {
            return "not valid";
        }

        Cookie cookie = new Cookie("memberId", String.valueOf(loginMember.getId()));
        HttpSession session = request.getSession();
        session.setAttribute(SessionConst.LOGIN_INFO, loginMember);
        System.out.println(cookie);
        return "ok";
    }

    @PostMapping("/logout")
    public String logout(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if(session != null) {
            session.invalidate();
        }
        return "ok";
    }

}
