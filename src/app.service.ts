import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `${process.env.ENV_TEST ?? "sem env"}`;
  }
}
