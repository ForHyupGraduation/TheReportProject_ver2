package back.back.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Setter @Getter
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long id;

    private String email;

    private String password; // 해쉬 함수가 들어와야함.

    private String nickName;

    @OneToMany(mappedBy = "member")
    private List<PortFolio> portFolios = new ArrayList<>();

    public static Member getMember(String email, String password, String nickName) {
        Member member = new Member();
        member.setEmail(email);
        member.setPassword(password);
        member.setNickName(nickName);
        return member;
    }



}
