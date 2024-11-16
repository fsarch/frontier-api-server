import { Injectable } from '@nestjs/common';

@Injectable()
export class FrontierApiService {
  getHello(): string {
    return 'Hello World!';
  }
}
