import { Test, TestingModule } from '@nestjs/testing';
import { CachePolicyService } from './cache-policy.service';

describe('CachePolicyService', () => {
  let service: CachePolicyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CachePolicyService],
    }).compile();

    service = module.get<CachePolicyService>(CachePolicyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
