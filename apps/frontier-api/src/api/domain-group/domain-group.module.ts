import { Module } from '@nestjs/common';
import { DomainGroupService } from './domain-group.service';
import { DomainGroupController } from './domain-group.controller';
import { DomainModule } from './domain/domain.module';
import { DomainGroup } from "../../database/entities/domain-group.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CachePolicyModule } from './cache-policy/cache-policy.module';
import { PathRuleModule } from './path-rule/path-rule.module';
import { UpstreamGroupModule } from './upstream-group/upstream-group.module';

@Module({
  providers: [DomainGroupService],
  controllers: [DomainGroupController],
  imports: [
    DomainModule,
    TypeOrmModule.forFeature([DomainGroup]),
    CachePolicyModule,
    PathRuleModule,
    UpstreamGroupModule,
  ]
})
export class DomainGroupModule {}
