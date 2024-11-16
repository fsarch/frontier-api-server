import { Module } from '@nestjs/common';
import { PathRuleService } from './path-rule.service';
import { PathRuleController } from './path-rule.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { PathRule } from "../../../database/entities/path-rule.entity";

@Module({
  providers: [PathRuleService],
  controllers: [PathRuleController],
  imports: [
    TypeOrmModule.forFeature([PathRule]),
  ],
})
export class PathRuleModule {}
