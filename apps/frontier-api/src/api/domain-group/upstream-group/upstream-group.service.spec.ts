import { Test, TestingModule } from '@nestjs/testing';
import { UpstreamGroupService } from './upstream-group.service';

describe('UpstreamGroupService', () => {
  let service: UpstreamGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpstreamGroupService],
    }).compile();

    service = module.get<UpstreamGroupService>(UpstreamGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
