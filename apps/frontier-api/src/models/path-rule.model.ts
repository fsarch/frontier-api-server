import { ApiProperty } from "@nestjs/swagger";
import { PathRule } from "../database/entities/path-rule.entity";
import { Optional } from "@nestjs/common";

export class PathRuleDto {
  static FromDbo(dbo: PathRule) {
    const dto = new PathRuleDto();

    dto.id = dbo.id;
    dto.name = dbo.name;
    dto.path = dbo.path;
    dto.cachePolicyId = dbo.cachePolicyId;
    dto.domainGroupId = dbo.domainGroupId;
    dto.upstreamGroupId = dbo.upstreamGroupId;
    dto.order = dbo.order;

    return dto;
  }

  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  path: string;

  @ApiProperty()
  cachePolicyId: string;

  @ApiProperty()
  domainGroupId: string;

  @ApiProperty()
  upstreamGroupId: string;

  @ApiProperty()
  order: number;
}

export class PathRuleCreateDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  path: string;

  @ApiProperty()
  cachePolicyId: string;

  @ApiProperty()
  domainGroupId: string;

  @ApiProperty()
  upstreamGroupId: string;

  @ApiProperty()
  @Optional()
  order: number;
}
