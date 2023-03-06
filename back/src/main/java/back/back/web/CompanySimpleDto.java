package back.back.web;

import back.back.domain.Company;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CompanySimpleDto {
    private String companyName;
    private String categoryName;
    private Integer growthPoint;
    private Integer interestPoint;
    private Integer subscribed;

    public CompanySimpleDto(Company company) {
        this.companyName = company.getCompanyName();
        this.categoryName = company.getCategoryName();
        this.growthPoint = company.getGrowthPoint();
        this.interestPoint = company.getInterestPoint();
        this.subscribed = company.getSubscribed();
    }
}
