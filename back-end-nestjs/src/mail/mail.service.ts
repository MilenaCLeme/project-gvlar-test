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
    await this.mailerService.sendMail({
      to: userEmail, // override default from
      from: 'biluzinha4@hotmail.com',
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
