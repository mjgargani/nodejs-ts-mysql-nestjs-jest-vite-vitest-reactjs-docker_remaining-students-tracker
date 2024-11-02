import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

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
}
