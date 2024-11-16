import { Test, TestingModule } from '@nestjs/testing';
import { FrontierApiController } from './frontier-api.controller';
import { FrontierApiService } from './frontier-api.service';

describe('FrontierApiController', () => {
  let frontierApiController: FrontierApiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FrontierApiController],
      providers: [FrontierApiService],
    }).compile();

    frontierApiController = app.get<FrontierApiController>(FrontierApiController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(frontierApiController.getHello()).toBe('Hello World!');
    });
  });
});
