package back.back.web;

import back.back.web.member.MemberJoinResult;
import back.back.web.portfolio.PortFolioDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class ProfilePage {
    private MemberJoinResult result;
    private List<CompanySimpleDto> companySimpleDtos;
    private List<PortFolioDto> portFolioDtos;

}
