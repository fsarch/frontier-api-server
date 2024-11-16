import { Test, TestingModule } from '@nestjs/testing';
import { CachePolicyController } from './cache-policy.controller';

describe('CachePolicyController', () => {
  let controller: CachePolicyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CachePolicyController],
    }).compile();

    controller = module.get<CachePolicyController>(CachePolicyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
