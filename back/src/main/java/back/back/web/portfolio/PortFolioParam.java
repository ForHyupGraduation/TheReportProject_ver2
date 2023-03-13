package back.back.web.portfolio;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PortFolioParam {
    private Long memberId;
    private String companyName;

    private Integer interestPoint;

    public PortFolioParam() {
    }

    public PortFolioParam(Long memberId, String companyName, Integer interestPoint) {
        this.memberId = memberId;
        this.companyName = companyName;
        if (interestPoint != null) {
            this.interestPoint = interestPoint;
        } else {
            this.interestPoint = 20;
        }
    }
}
