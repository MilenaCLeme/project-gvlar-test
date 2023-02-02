import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(
    userName: string,
    userId: number,
    userEmail: string,
  ) {
    console.log(userName, userEmail, userId);
    await this.mailerService.sendMail({
      from: 'milena@milenachrysostomoleme.com.br',
      to: userEmail, // override default from
      subject: 'Welcome to Nice App! Confirm your Email',
      template: './confirmation', // `.hbs` extension is appended automatically
      context: {
        // ✏️ filling curly brackets with content
        name: userName,
        id: userId,
      },
    });
  }
}
