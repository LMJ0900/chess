import { SignInRes } from '@/api/domain/auth/response/SignInRes';

export class SignInViewModel {
  constructor(
    readonly accessJwt: string,
    readonly refreshJwt: string,
  ) {}

  static of(SignInRes: SignInRes) {
    return new SignInViewModel(SignInRes.accessJwt, SignInRes.refreshJwt);
  }
}
