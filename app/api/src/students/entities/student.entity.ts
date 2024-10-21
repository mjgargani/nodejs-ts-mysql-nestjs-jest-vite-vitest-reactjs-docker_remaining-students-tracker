import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn('increment')
  'std_id': number;

  @Column({ nullable: false })
  'std_name': string;

  @Column({ nullable: false })
  'std_phone_number': string;

  @Column({ nullable: false })
  'std_fst_choice': string;

  @Column({ nullable: false })
  'std_scd_choice': string;

  @Column({ nullable: false })
  'std_trd_choice': string;

  @CreateDateColumn({
    type: 'timestamp',
  })
  'std_created_at': Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  'std_updated_at': Date;
}
