package back.back.test;

import jakarta.mail.Authenticator;
import jakarta.mail.PasswordAuthentication;
import lombok.AllArgsConstructor;


public class MailAuth extends Authenticator {
    private PasswordAuthentication pa;

    public MailAuth() {
        String mailId = "hyeongiltest@gmail.com";
        String password = "stlnoawkkdstzeda";

        pa = new PasswordAuthentication(mailId, password);
    }

    @Override
    protected PasswordAuthentication getPasswordAuthentication() {
        return pa;
    }
}
