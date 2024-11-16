import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { DomainGroupCreateDto, DomainGroupDto } from "../../models/domain-group.model";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "../../fsarch/auth/guards/auth.guard";
import { Roles } from "../../fsarch/uac/decorators/roles.decorator";
import { Role } from "../../fsarch/auth/role.enum";
import { DomainGroupService } from "./domain-group.service";

@ApiTags('domain-groups')
@Controller({
  path: 'domain-groups',
  version: '1',
})
@ApiBearerAuth()
export class DomainGroupController {
  constructor(
    private readonly domainGroupService: DomainGroupService,
  ) {
  }

  @Post()
  @UseGuards(AuthGuard)
  @Roles(Role.manage)
  public async Create(@Body() domainGroupDto: DomainGroupCreateDto) {
    return await this.domainGroupService.Create(domainGroupDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  @Roles(Role.manage)
  public async List() {
    const domainGroups = await this.domainGroupService.List();

    return domainGroups.map(DomainGroupDto.FromDbo);
  }
}
