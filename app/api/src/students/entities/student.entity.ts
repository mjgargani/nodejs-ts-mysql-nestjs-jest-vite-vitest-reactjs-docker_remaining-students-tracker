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
  'student_id': number;

  @Column({ nullable: false })
  'student_name': string;

  @Column({ nullable: false })
  'student_email': string;

  @Column({ nullable: false })
  'student_current_age': number;

  @CreateDateColumn({
    type: 'timestamp',
  })
  'student_created_at': Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  'student_updated_at': Date;
}
