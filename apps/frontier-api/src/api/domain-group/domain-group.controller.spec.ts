import { Test, TestingModule } from '@nestjs/testing';
import { DomainGroupController } from './domain-group.controller';

describe('DomainGroupController', () => {
  let controller: DomainGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DomainGroupController],
    }).compile();

    controller = module.get<DomainGroupController>(DomainGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
