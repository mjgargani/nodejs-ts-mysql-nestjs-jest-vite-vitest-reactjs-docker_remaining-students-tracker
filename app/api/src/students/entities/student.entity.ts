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
  'std_series': string; 
  
  @Column({ nullable: false })
  'std_nps': number;  

  @CreateDateColumn({
    type: 'timestamp',
  })
  'std_created_at': Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  'std_updated_at': Date;
}
