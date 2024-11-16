import { Module } from '@nestjs/common';
import { DomainGroupModule } from './domain-group/domain-group.module';

@Module({
  imports: [DomainGroupModule]
})
export class ApiModule {}
