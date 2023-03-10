package back.back.web;

import back.back.web.portfolio.PortFolioDto;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class HomeDto {
    private String categoryName;
    private List<PortFolioDto> portFolioDtos = new ArrayList<>();
    private List<CompanySimpleInfo> simpleInfos = new ArrayList<>();

    public List<CompanySimpleInfo> getSimpleInfos() {
        return simpleInfos;
    }

    public void setSimpleInfos(List<CompanySimpleInfo> simpleInfos) {
        this.simpleInfos = simpleInfos;
    }
}
