package back.back.web.portfolio;

import back.back.domain.PortFolio;

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
