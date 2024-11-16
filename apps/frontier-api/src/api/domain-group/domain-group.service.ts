import { Injectable } from '@nestjs/common';
import { DomainGroupCreateDto, DomainGroupDto } from "../../models/domain-group.model";
import { InjectRepository } from "@nestjs/typeorm";
import { DomainGroup } from "../../database/entities/domain-group.entity";
import { Repository } from "typeorm";

@Injectable()
export class DomainGroupService {
  constructor(
    @InjectRepository(DomainGroup)
    private domainGroupRepository: Repository<DomainGroup>,
  ) {
  }

  public async Create(
    domainGroupDto: DomainGroupCreateDto,
  ): Promise<Pick<DomainGroupDto, 'id'>> {
    const createdDomainGroup = this.domainGroupRepository.create({
      id: crypto.randomUUID(),
      ...domainGroupDto,
    });

    const savedDomainGroup = await this.domainGroupRepository.save(createdDomainGroup);

    return {
      id: savedDomainGroup.id,
    };
  }

  public async List(): Promise<Array<DomainGroup>> {
    return await this.domainGroupRepository.find();
  }
}
