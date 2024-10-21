import { Inject, Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentsService {
  constructor(
    @Inject('STUDENT_REPOSITORY')
    private studentRepository: Repository<Student>,
  ) {}

  async create(createStudentDto: CreateStudentDto) {
    const newStudent = this.studentRepository.create(createStudentDto);
    await this.studentRepository.save(newStudent);
    return newStudent;
  }

  async findAll() {
    return await this.studentRepository.find();
  }

  async findOne(student_id: number): Promise<Student> {
    const student = await this.studentRepository.findOne({
      where: { student_id },
    });
    return student;
  }

  async update(student_id: number, updateStudentDto: UpdateStudentDto) {
    return await this.studentRepository.update(student_id, updateStudentDto);
  }

  async remove(student_id: number) {
    return await this.studentRepository.delete(student_id);
  }
}
