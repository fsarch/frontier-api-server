import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "../../../../fsarch/auth/guards/auth.guard";
import { Roles } from "../../../../fsarch/uac/decorators/roles.decorator";
import { Role } from "../../../../fsarch/auth/role.enum";
import { UpstreamService } from "./upstream.service";
import { UpstreamCreateDto, UpstreamDto } from "../../../../models/upstream.model";

@ApiTags('upstream')
@Controller({
  path: 'domain-groups/:domainGroupId/upstream-groups/:upstreamGroupId/upstream',
  version: '1',
})
@ApiBearerAuth()
export class UpstreamController {
  constructor(
    private readonly upstreamService: UpstreamService,
  ) {
  }

  @Post()
  @UseGuards(AuthGuard)
  @Roles(Role.manage)
  public async Create(
    @Body() upstreamCreateDto: UpstreamCreateDto,
    @Param('upstreamGroupId') upstreamGroupId: string,
  ) {
    return await this.upstreamService.Create(
      upstreamGroupId,
      upstreamCreateDto,
    );
  }

  @Get()
  @UseGuards(AuthGuard)
  @Roles(Role.manage)
  public async List(
    @Param('upstreamGroupId') upstreamGroupId: string,
  ) {
    const pathRules = await this.upstreamService.ListByUpstreamGroupId(
      upstreamGroupId,
    );

    return pathRules.map(UpstreamDto.FromDbo);
  }
}
