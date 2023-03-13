package back.back.test;

import jakarta.mail.Authenticator;
import jakarta.mail.Message;
import jakarta.mail.Session;
import jakarta.mail.Transport;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;

import javax.xml.crypto.Data;
import java.util.Date;
import java.util.Properties;

public class MailSender {
    public void sendMail(String email) {
        Properties pro = System.getProperties();
        pro.put("mail.smtp.starttls.enable", "true");
        pro.put("mail.smtp.host", "smtp.gmail.com");
        pro.put("mail.smtp.auth", "true");
        pro.put("mail.smtp.port", "587");

        Authenticator auth = new MailAuth();
        Session session = Session.getDefaultInstance(pro, auth);
        MimeMessage msg = new MimeMessage(session);

        try {
            msg.setSentDate(new Date());
            msg.setFrom(new InternetAddress("hyeongiltest100@gmail.com"));
            InternetAddress to = new InternetAddress(email);
            msg.setRecipient(Message.RecipientType.TO, to);
            msg.setText("Hello Text");
            Transport.send(msg);
        } catch(Exception e) {
            e.printStackTrace();
        }
    }
}
