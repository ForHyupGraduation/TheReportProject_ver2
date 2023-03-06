package back.back.web.portfolio;

import back.back.domain.PortFolio;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PortFolioDto {
    private String categoryName;
    private String companyName;
    private Integer interestPoint;

    public PortFolioDto(PortFolio portFolio) {
        this.categoryName = portFolio.getCateGoryName();
        this.companyName = portFolio.getCompanyName();
        this.interestPoint = portFolio.getInterestPoint();
    }
}
