import { Test, TestingModule } from '@nestjs/testing';
import { UpstreamService } from './upstream.service';

describe('UpstreamService', () => {
  let service: UpstreamService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpstreamService],
    }).compile();

    service = module.get<UpstreamService>(UpstreamService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
