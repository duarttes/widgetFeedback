import nodemailer from 'nodemailer';
import { MailAdapter,SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2473aec9973628",
    pass: "9b31a70009e78f"
  }
});

export class NodemailerMailAdapter implements MailAdapter{
  async sendMail({subject, body}: SendMailData){
    await transport.sendMail({
      from: 'Equipe Feedget <feedget@supportfeedget.com',
      to: 'Matheus Duarte <maduarttes@gmail.com>',
      subject,
      html:body,
    });
  };
}