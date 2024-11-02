import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { CreateCourseDto } from 'src/courses/dto/create-course.dto';
import { Course } from 'src/courses/entities/course.entity';
import { CreatePhoneDto } from 'src/phones/dto/create-phone.dto';
import { Phone } from 'src/phones/entities/phone.entity';

export class CreateStudentDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  std_name: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  std_series: string;
  
  @IsNotEmpty()
  @IsNumber()
  @MinLength(1)
  @MaxLength(5)
  std_nps: number;

  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CreatePhoneDto)
  phones: Phone[];

  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CreateCourseDto)
  courses: Course[];
}
