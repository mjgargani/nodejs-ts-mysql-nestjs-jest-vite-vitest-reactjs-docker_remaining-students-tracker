import { Student } from 'src/students/entities/student.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Phone {
  @PrimaryGeneratedColumn('uuid')
  'phn_id': string;

  @Column({ nullable: false })
  'phn_number': string;

  @CreateDateColumn({
    type: 'timestamp',
  })
  'phn_created_at': Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  'phn_updated_at': Date;

  @ManyToOne(() => Student, student => student.std_id)
  @JoinColumn({ name: 'std_id' })
  std_id: Student;
}
