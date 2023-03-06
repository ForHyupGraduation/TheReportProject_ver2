package back.back;

import back.back.domain.Company;
import back.back.domain.News;
import back.back.domain.financialratio.NetProfit;
import back.back.domain.financialratio.OperatingProfit;
import back.back.domain.financialratio.OperatingProfitMargin;
import back.back.domain.financialratio.Sales;
import jakarta.persistence.*;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;


public class JpaTest {


    @Test
    void jpaTest() {

    }

    @Test
    void test() {
        List<String> strings = Arrays.asList("밸로프",
                "위메이드플레이",
                "미스터블루",
                "크래프톤",
                "미투젠",
                "액션스퀘어");

        List<String> test1Str = Arrays.asList("미스터블루", "크래프톤", "미투젠");
        List<String> collect = strings
                .stream()
                .filter(string -> test1Str.contains(string))
                .collect(Collectors.toList());

        collect.stream()
                .forEach(System.out::println);
    }

    @Entity
    static class Member {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name ="member_id")
        private Long id;
        private String name;

        public void setName(String name) {
            this.name = name;
        }
    }
}
