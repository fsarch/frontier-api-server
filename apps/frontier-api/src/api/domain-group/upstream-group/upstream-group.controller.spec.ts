import { Test, TestingModule } from '@nestjs/testing';
import { UpstreamGroupController } from './upstream-group.controller';

describe('UpstreamGroupController', () => {
  let controller: UpstreamGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpstreamGroupController],
    }).compile();

    controller = module.get<UpstreamGroupController>(UpstreamGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
