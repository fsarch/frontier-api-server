import { ApiProperty } from "@nestjs/swagger";
import { DomainGroup } from "../database/entities/domain-group.entity";
import { UpstreamGroup } from "../database/entities/upstream-group.entity";

export class UpstreamGroupDto {
  static FromDbo(dbo: UpstreamGroup) {
    const dto = new UpstreamGroupDto();

    dto.id = dbo.id;
    dto.name = dbo.name;

    return dto;
  }

  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;
}

export class UpstreamGroupCreateDto {
  @ApiProperty()
  name: string;
}
