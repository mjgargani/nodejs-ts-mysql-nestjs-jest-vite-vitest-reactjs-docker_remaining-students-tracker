import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { DatabaseModule } from 'src/database/database.module';
import { studentProviders } from './entities/students.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [StudentsController],
  providers: [...studentProviders, StudentsService],
  exports: [StudentsService],
})
export class StudentsModule {}
