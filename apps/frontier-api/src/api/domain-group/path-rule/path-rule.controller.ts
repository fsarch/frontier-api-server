import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "../../../fsarch/auth/guards/auth.guard";
import { Roles } from "../../../fsarch/uac/decorators/roles.decorator";
import { Role } from "../../../fsarch/auth/role.enum";
import { PathRuleService } from "./path-rule.service";
import { PathRuleCreateDto, PathRuleDto } from "../../../models/path-rule.model";

@ApiTags('path-rules')
@Controller({
  path: 'domain-groups/:domainGroupId/path-rules',
  version: '1',
})
@ApiBearerAuth()
export class PathRuleController {
  constructor(
    private readonly pathRuleService: PathRuleService,
  ) {
  }

  @Post()
  @UseGuards(AuthGuard)
  @Roles(Role.manage)
  public async Create(
    @Body() pathRuleCreateDto: PathRuleCreateDto,
    @Param('domainGroupId') domainGroupId: string,
  ) {
    return await this.pathRuleService.Create(
      domainGroupId,
      pathRuleCreateDto,
    );
  }

  @Get()
  @UseGuards(AuthGuard)
  @Roles(Role.manage)
  public async List(
    @Param('domainGroupId') domainGroupId: string,
  ) {
    const pathRules = await this.pathRuleService.ListByDomainGroupId(
      domainGroupId,
    );

    return pathRules.map(PathRuleDto.FromDbo);
  }
}
