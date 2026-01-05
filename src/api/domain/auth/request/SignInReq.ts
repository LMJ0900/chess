type SignInProps = {
  readonly email: string;
  readonly password: string;
};

class SignInPayload {
  constructor(
    readonly email: string,
    readonly password: string,
  ) {}
}

export class SignInReq {
  constructor(private readonly data: SignInProps) {}

  static of(data: SignInProps): SignInReq {
    return new SignInReq(data);
  }

  toPayload(): SignInPayload {
    return new SignInPayload(this.data.email, this.data.password);
  }
}
