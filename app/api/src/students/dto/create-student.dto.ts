import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  std_name: string;

  @IsNotEmpty()
  @IsEmail()
  @MinLength(4)
  std_phone_number: string;

  @IsNotEmpty()
  @IsString()
  std_series: string;

  @IsNotEmpty()
  @IsEmail()
  std_fst_choice: string;

  @IsNotEmpty()
  @IsEmail()
  std_scd_choice: string;

  @IsNotEmpty()
  @IsEmail()
  std_trd_choice: string;
}
