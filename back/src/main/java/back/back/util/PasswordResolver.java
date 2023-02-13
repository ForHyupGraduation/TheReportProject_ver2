package back.back.util;

import org.springframework.stereotype.Component;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

@Component
public class PasswordResolver {
    public static String getHash(String password) {
        try{
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
