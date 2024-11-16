import { Test, TestingModule } from '@nestjs/testing';
import { UpstreamController } from './upstream.controller';

describe('UpstreamController', () => {
  let controller: UpstreamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpstreamController],
    }).compile();

    controller = module.get<UpstreamController>(UpstreamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
