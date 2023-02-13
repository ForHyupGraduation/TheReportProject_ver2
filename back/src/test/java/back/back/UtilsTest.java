package back.back;

import back.back.crawler.CrawlerUtils;
import back.back.domain.financialratio.FinancialRatio;
import org.junit.jupiter.api.Test;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Map;

public class UtilsTest {
    @Test
    void utilsTest() {
        Map<String, FinancialRatio> financialRatioMap = CrawlerUtils.crawlerTarget();

        for (Map.Entry<String, FinancialRatio> entry : financialRatioMap.entrySet()) {
            System.out.println("key : " + entry.getKey() +" value : " + entry.getValue());
        }
    }

    @Test
    void hashTest() {
        String ap = "ch123456";
        String hash = HashPassword.getHash(ap);
        System.out.println(hash.equals("08667b0b6ceeb6899d5ed2d24716d13f44ea4a2648cb5beb948cd106597a6533"));
    }

    static class HashPassword {

        public static String getHash(String password) {
            try {
                MessageDigest md = MessageDigest.getInstance("SHA-256");
                md.update(password.getBytes());

                byte[] hashPassword = md.digest();

                StringBuilder stringBuilder = new StringBuilder();
                for (byte b : hashPassword) {
                    stringBuilder.append(String.format("%02x", b));
                }
                return stringBuilder.toString();
            } catch (NoSuchAlgorithmException e) {
                System.out.println("Algorithm not found");
                throw new RuntimeException(e);
            }
        }

    }
}
