import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  student_name: string;

  @IsEmail()
  @MinLength(5)
  student_email: string;

  @IsNotEmpty()
  @IsNumber()
  @MinLength(13)
  password: string;
}
