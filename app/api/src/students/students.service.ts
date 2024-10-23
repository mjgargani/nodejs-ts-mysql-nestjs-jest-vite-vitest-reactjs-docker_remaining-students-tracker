import { Inject, Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';
import { json2csv } from 'json-2-csv';
import { writeFile } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class StudentsService {
  constructor(
    @Inject('STUDENT_REPOSITORY')
    private studentRepository: Repository<Student>,
  ) {}

  async create(createStudentDto: CreateStudentDto) {
    const newStudent = this.studentRepository.create(createStudentDto);
    await this.studentRepository.save(newStudent);
    const getReport = await this.studentRepository.find();
    const csv = await json2csv(getReport);
    await writeFile(join(__dirname,'..', '..', 'report','students-report.csv'), csv);
    return newStudent;
  }

  async findAll() {
    return await this.studentRepository.find();
  }

  async findOne(std_id: number): Promise<Student> {
    const student = await this.studentRepository.findOne({
      where: { std_id },
    });
    return student;
  }

  async update(std_id: number, updateStudentDto: UpdateStudentDto) {
    return await this.studentRepository.update(std_id, updateStudentDto);
  }

  async remove(std_id: number) {
    return await this.studentRepository.delete(std_id);
  }
}
