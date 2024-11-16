import { Test, TestingModule } from '@nestjs/testing';
import { PathRuleService } from './path-rule.service';

describe('PathRuleService', () => {
  let service: PathRuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PathRuleService],
    }).compile();

    service = module.get<PathRuleService>(PathRuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
