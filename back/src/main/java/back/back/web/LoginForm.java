package back.back.web;

import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class LoginForm {
    @NotEmpty
    private String email;
    @NotEmpty
    private String password;
}
