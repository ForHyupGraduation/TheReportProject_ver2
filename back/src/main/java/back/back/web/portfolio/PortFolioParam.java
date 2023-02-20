package back.back.web.portfolio;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
public class PortFolioParam {
    private Long memberId;
    private String companyName;

    public PortFolioParam(Long memberId, String companyName) {
        this.memberId = memberId;
        this.companyName = companyName;
    }
}
