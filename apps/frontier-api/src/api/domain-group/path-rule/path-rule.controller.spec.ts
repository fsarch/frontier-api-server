import { Test, TestingModule } from '@nestjs/testing';
import { PathRuleController } from './path-rule.controller';

describe('PathRuleController', () => {
  let controller: PathRuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PathRuleController],
    }).compile();

    controller = module.get<PathRuleController>(PathRuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
