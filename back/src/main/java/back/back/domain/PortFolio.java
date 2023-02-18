package back.back.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Setter @Getter
@NoArgsConstructor
public class PortFolio {
    @Id
    @GeneratedValue
    @Column(name = "portfolio_id")
    private Long id;

    private String cateGoryName;

    private String companyName;

    private Integer interestPoint;

    private Integer growthPoint;

    public PortFolio(String cateGoryName, String companyName, Integer interestPoint, Integer growthPoint) {
        this.cateGoryName = cateGoryName;
        this.companyName = companyName;
        this.interestPoint = interestPoint;
        this.growthPoint = growthPoint;
    }

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;


    public static PortFolio makePortPolio(Company company) {
        return new PortFolio(company.getCategoryName(),
                company.getCompanyName(), company.getInterestPoint(),
                company.getGrowthPoint());
    }
}
