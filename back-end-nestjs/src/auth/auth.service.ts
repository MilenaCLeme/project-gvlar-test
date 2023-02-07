import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignUpInput } from './dto/signup-input';
import * as argon from 'argon2';
import { SignInInput } from './dto/signin-input';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
    private mailService: MailService,
  ) {}

  async signup(signUpInput: SignUpInput) {
    const hashedPassword = await argon.hash(signUpInput.password);
    const user = await this.prisma.user.create({
      data: {
        name: signUpInput.name,
        email: signUpInput.email,
        hashedPassword,
        phone: signUpInput.phone,
        role: signUpInput.role,
      },
    });

    await this.mailService.sendUserConfirmation(user.name, user.id, user.email);

    const { accessToken } = await this.createTokens(user.id, user.email);

    await this.updateRefreshToken(user.id, accessToken);
    return { accessToken, user };
  }

  async signin(signInInput: SignInInput) {
    const user = await this.prisma.user.findUnique({
      where: { email: signInInput.email },
    });

    if (!user) {
      throw new ForbiddenException('Access Denied');
    }

    if (!user.validation) {
      throw new ForbiddenException('Access not Auth');
    }

    const doPasswordsMatch = await argon.verify(
      user.hashedPassword,
      signInInput.password,
    );

    if (!doPasswordsMatch) {
      throw new ForbiddenException('Access Denied');
    }

    const { accessToken } = await this.createTokens(user.id, user.email);

    await this.updateRefreshToken(user.id, accessToken);

    return { accessToken, user };
  }

  async createTokens(userId: number, email: string) {
    const accessToken = this.jwtService.sign(
      { userId, email },
      {
        expiresIn: '2d',
        secret: this.configService.get('ACCES_TOKEN_SECRET'),
      },
    );
    return { accessToken };
  }

  async updateRefreshToken(userId: number, refreshToken: string) {
    const hashedRefreshToken = await argon.hash(refreshToken);
    await this.prisma.user.update({
      where: { id: userId },
      data: { hashedRefreshToken },
    });
  }

  async logout(userId: number) {
    await this.prisma.user.updateMany({
      where: {
        id: userId,
        hashedRefreshToken: { not: null },
      },
      data: { hashedRefreshToken: null },
    });
    return { loggedOut: true };
  }

  async getNewTokens(userId: number, header: any) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new ForbiddenException('Access Denied');
    }

    if (!user.hashedRefreshToken) {
      throw new ForbiddenException('Access Denied');
    }

    const doRefresenTokenMatch = await argon.verify(
      user.hashedRefreshToken,
      header,
    );

    if (!doRefresenTokenMatch) {
      throw new ForbiddenException('Access Denied');
    }

    const { accessToken } = await this.createTokens(user.id, user.email);

    await this.updateRefreshToken(user.id, accessToken);

    return { accessToken, user };
  }
}
