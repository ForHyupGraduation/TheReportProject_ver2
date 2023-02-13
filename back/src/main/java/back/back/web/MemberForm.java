package back.back.web;

import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MemberForm {
    @NotEmpty
    private String email;
    @NotEmpty
    private String password;
    @NotEmpty
    private String nickName;
}
