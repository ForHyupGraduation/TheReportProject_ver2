package back.back.controller;

import back.back.domain.Member;
import back.back.service.LoginService;
import back.back.service.MemberService;
import back.back.web.LoginForm;
import back.back.web.MemberForm;
import back.back.web.member.MemberJoinResult;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

@Slf4j
@RestController
@RequiredArgsConstructor
public class MemberController {
    private final MemberService service;

    @PostMapping("/add/member")
    public Member addMember(@RequestBody MemberForm form, BindingResult result) {
        System.out.println(form.getEmail());
        System.out.println(form.getPassword());

        Member member = service.save(form);
        MemberJoinResult joinResult = new MemberJoinResult(member);
        return member;
    }

    @PostMapping
    public String update() {

        return "ok";
    }

}
