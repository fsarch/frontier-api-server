import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'domain_group',
})
export class DomainGroup {
  @PrimaryGeneratedColumn('uuid', {
    primaryKeyConstraintName: 'pk_domain_group',
  })
  id: string;

  @Column({
    name: 'name',
    length: '256',
    nullable: false,
  })
  name: string;

  @CreateDateColumn({
    name: 'creation_time',
  })
  creationTime: Date;

  @DeleteDateColumn({
    name: 'deletion_time',
  })
  deletionTime: Date;
}
