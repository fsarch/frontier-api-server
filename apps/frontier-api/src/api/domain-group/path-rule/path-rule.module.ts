import { Module } from '@nestjs/common';
import { PathRuleService } from './path-rule.service';
import { PathRuleController } from './path-rule.controller';

@Module({
  providers: [PathRuleService],
  controllers: [PathRuleController]
})
export class PathRuleModule {}
