package back.back;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
public class TestMapping {
    private Long id;
    private String companyName;

    public TestMapping(Long id, String companyName) {
        this.id = id;
        this.companyName = companyName;
    }
}
