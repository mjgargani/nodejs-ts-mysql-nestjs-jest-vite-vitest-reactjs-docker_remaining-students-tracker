import { Inject, Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';
import { json2csv } from 'json-2-csv';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { Phone } from 'src/phones/entities/phone.entity';
import { Course } from 'src/courses/entities/course.entity';

@Injectable()
export class StudentsService {
  constructor(
    @Inject('STUDENT_REPOSITORY')
    @Inject('PHONE_REPOSITORY')
    @Inject('COURSE_REPOSITORY')
    private studentRepository: Repository<Student>,
    private phoneRepository: Repository<Phone>,
    private courseRepository: Repository<Course>,
  ) {}

  async relatePhonesAndCourses(partialStudentDto: {
    phones: CreateStudentDto['phones'];
    courses: CreateStudentDto['courses'];
  }, student: Student, remove: boolean = false) {
    await this.phoneRepository.delete({student: { std_id: student.std_id }});
    await this.courseRepository.delete({student: { std_id: student.std_id }});

    if(remove) return;

    for(const phone of partialStudentDto.phones){
      const newPhone = this.phoneRepository.create({phn_number: phone.phn_number, student});
      await this.phoneRepository.save(newPhone);
    }
    for(const course of partialStudentDto.courses){
      const newCourse = this.courseRepository.create({crs_name: course.crs_name, student});
      await this.courseRepository.save(newCourse);
    }
  }

  async create(createStudentDto: CreateStudentDto) {
    const newStudent = this.studentRepository.create(createStudentDto);
    await this.studentRepository.save(newStudent);

    const currentStudentId = newStudent.std_id;
    await this.relatePhonesAndCourses(createStudentDto, newStudent);
    
    return newStudent;
  }

  async findAll() {
    return await this.studentRepository.find({relations: ['phones', 'courses']});
  }

  async findOne(std_id: string): Promise<Student> {
    const student = await this.studentRepository.findOne({
      where: { std_id },
      relations: ['phones', 'courses']
    });
    return student;
  }

  async update(std_id: string, updateStudentDto: UpdateStudentDto) {
    const currentStudent = await this.findOne(std_id);
    await this.relatePhonesAndCourses(updateStudentDto, currentStudent);
    return await this.studentRepository.update(std_id, updateStudentDto);
  }

  async remove(std_id: string) {
    return await this.studentRepository.delete(std_id);
  }

  async csvReport() {
    const getReport = await this.findAll();
    const csv = await json2csv(getReport);
    await writeFile(join(__dirname,'..', '..', 'report','students-report.csv'), csv);
    return csv;
  }
}
