package back.back.web.member;

import back.back.domain.Member;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class MemberJoinResult {
    private String email;
    private String nickName;

    public MemberJoinResult(Member member) {
        this.email = member.getEmail();
        this.nickName = member.getNickName();
    }
}
