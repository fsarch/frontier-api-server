import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'path_rule',
})
export class PathRule {
  @PrimaryGeneratedColumn('uuid', {
    primaryKeyConstraintName: 'pk_path_rule',
  })
  id: string;

  @Column({
    name: 'domain_group_id',
    type: 'uuid',
    nullable: false,
  })
  domainGroupId: string;

  @Column({
    name: 'name',
    length: '256',
    nullable: false,
  })
  name: string;

  @Column({
    name: 'path',
    length: '2048',
    nullable: false,
  })
  path: string;

  @Column({
    name: 'order',
    nullable: false,
  })
  order: number;

  @Column({
    name: 'cache_policy_id',
    type: 'uuid',
    nullable: true,
  })
  cachePolicyId: string;

  @Column({
    name: 'upstream_group_id',
    type: 'uuid',
    nullable: true,
  })
  upstreamGroupId: string;

  @CreateDateColumn({
    name: 'creation_time',
  })
  creationTime: Date;

  @DeleteDateColumn({
    name: 'deletion_time',
  })
  deletionTime: Date;
}
