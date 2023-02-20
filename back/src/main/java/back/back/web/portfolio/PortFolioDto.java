package back.back.web.portfolio;

import back.back.domain.PortFolio;

import java.util.List;

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
