package back.back.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;

@Entity
@Setter @Getter
@NoArgsConstructor
@ToString(of = {"companyName", "interestPoint"})
public class PortFolio {
    @Id
    @GeneratedValue
    @Column(name = "portfolio_id")
    private Long id;

    private String cateGoryName;

    private String companyName;

    private Integer interestPoint;

    public PortFolio(String cateGoryName, String companyName, Integer interestPoint) {
        this.cateGoryName = cateGoryName;
        this.companyName = companyName;
        this.interestPoint = interestPoint;
    }

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    public static PortFolio makePortPolio(Company company) {
        return new PortFolio(company.getCategoryName(),
                company.getCompanyName(), 20);
    }
}
