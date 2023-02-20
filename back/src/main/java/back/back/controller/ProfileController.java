package back.back.controller;

import back.back.TestMapping;
import back.back.domain.Member;
import back.back.domain.PortFolio;
import back.back.service.MemberService;
import back.back.service.ProfileService;
import back.back.web.portfolio.MyProfileDto;
import back.back.web.portfolio.PortFolioDto;
import back.back.web.portfolio.PortFolioParam;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ProfileController {
    private final ProfileService profileService;
    private final MemberService memberService;

    @PostMapping(name = "/add/portfolio", consumes = "application/json", produces = "application/json")
    public MyProfileDto addPortPolio(@RequestBody TestMapping test) {
        // 1. memberId가 넘어 오면 회원 정보를 조회한다.
        Member member = profileService.addPortPolio(test.getId(), test.getCompanyName());
        List<PortFolio> portFolios = member.getPortFolios();
        MyProfileDto myProfileDto = new MyProfileDto(member);
        return myProfileDto;
    }

    @PostMapping("/remove/portfolio")
    public String removePortPolio(@RequestBody Long memberId) {
        return "ok";
    }
}
