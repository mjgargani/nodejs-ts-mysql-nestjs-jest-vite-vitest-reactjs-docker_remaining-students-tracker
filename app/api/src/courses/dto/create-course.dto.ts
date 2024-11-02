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
  crs_name: string;

  @IsNotEmpty()
  @IsString()
  std_id: string;
}
