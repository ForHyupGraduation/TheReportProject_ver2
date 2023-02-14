package back.back.web;

import back.back.domain.Member;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginDto {
    private String nickName;
    private Long id;

    public LoginDto(Member member) {
        nickName = member.getNickName();
        id = member.getId();
    }
}
