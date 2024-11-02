import { Course } from 'src/courses/entities/course.entity';
import { Phone } from 'src/phones/entities/phone.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn('uuid')
  'std_id': string;

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

  @OneToMany(() => Phone, phone => phone.student, { cascade: true, onDelete: 'CASCADE' })
  phones: Phone[];

  @OneToMany(() => Course, course => course.student, { cascade: true, onDelete: 'CASCADE' })
  courses: Course[];
}
