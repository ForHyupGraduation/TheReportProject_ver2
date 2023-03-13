package back.back.test;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MailSenderTest {

    private MailSender mailSender;

    @Test
    void sendMail() {
        mailSender = new MailSender();
        mailSender.sendMail("coguddlf1000@naver.com");
    }
}