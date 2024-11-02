import { Student } from 'src/students/entities/student.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Course {
  @PrimaryGeneratedColumn('uuid')
  'crs_id': string;

  @Column({ nullable: false })
  'crs_name': string;

  @CreateDateColumn({
    type: 'timestamp',
  })
  'crs_created_at': Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  'crs_updated_at': Date;

  @ManyToOne(() => Student, student => student.courses)
  student: Student;
}
