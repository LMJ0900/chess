import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class LoginInputModel {
  @IsEmail({}, { message: '이메일 형식이 올바르지 않아요.' })
  @IsNotEmpty({ message: '이메일을 입력해 주세요.' })
  email!: string;

  @MinLength(6, { message: '비밀번호는 6자 이상이어야 해요.' })
  @IsNotEmpty({ message: '비밀번호를 입력해 주세요.' })
  password!: string;
}
