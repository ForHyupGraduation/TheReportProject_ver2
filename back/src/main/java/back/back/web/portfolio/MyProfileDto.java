package back.back.web.portfolio;
import back.back.domain.Member;
import java.util.List;
import java.util.stream.Collectors;

public class MyProfileDto {
    private List<PortFolioDto> portFolioDtos;
    private String nickName;
    private String email;

    public MyProfileDto(Member member) {
        this.portFolioDtos = member.getPortFolios()
                .stream()
                .map(portFolio -> new PortFolioDto(portFolio))
                .collect(Collectors.toList());
        this.nickName = member.getNickName();
        this.email = member.getEmail();
    }
}
