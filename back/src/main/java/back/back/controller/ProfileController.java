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

    @PostMapping("/add/portfolio")
    public MyProfileDto addPortPolio(@RequestBody PortFolioParam param) {
        Member member = profileService.addPortPolio(param.getMemberId(), param.getCompanyName());
        MyProfileDto myProfileDto = new MyProfileDto(member);
        return myProfileDto;
    }

    @PostMapping("/remove/portfolio")
    public String removePortPolio(@RequestBody PortFolioParam param) {
        Member member = profileService.removePortPolio(param.getMemberId(), param.getCompanyName());
        return "ok";
    }

    @GetMapping("/portfolios")
    public MyProfileDto viewMyPortPolios(@RequestParam Long memberId) {
        Member member = memberService.findById(memberId);
        MyProfileDto myProfileDto = new MyProfileDto(member);
        return myProfileDto;
    }

}
