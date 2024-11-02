import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateCourseDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  phn_number: string;

  @IsNotEmpty()
  @IsNumber()
  std_id: number;
}
