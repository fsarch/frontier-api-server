import { Test, TestingModule } from '@nestjs/testing';
import { DomainGroupService } from './domain-group.service';

describe('DomainGroupService', () => {
  let service: DomainGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DomainGroupService],
    }).compile();

    service = module.get<DomainGroupService>(DomainGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
