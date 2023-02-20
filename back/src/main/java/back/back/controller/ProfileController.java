package back.back.controller;

import back.back.domain.Member;
import back.back.domain.PortFolio;
import back.back.service.MemberService;
import back.back.service.ProfileService;
import back.back.web.portfolio.MyProfileDto;
import back.back.web.portfolio.PortFolioDto;
import back.back.web.portfolio.PortFolioParam;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ProfileController {
    private final ProfileService profileService;
    private final MemberService memberService;

    @PostMapping("/add/portpolio")
    public MyProfileDto addPortPolio(@RequestBody PortFolioParam param) {
        // 1. memberId가 넘어 오면 회원 정보를 조회한다.
        Member member = profileService.addPortPolio(param.getMemberId(), param.getCompanyName());
        List<PortFolio> portFolios = member.getPortFolios();
        MyProfileDto myProfileDto = new MyProfileDto(member);
        return myProfileDto;
    }

    @PostMapping("/remove/portpolio")
    public String removePortPolio(@RequestBody Long memberId) {
        return "ok";
    }
}
