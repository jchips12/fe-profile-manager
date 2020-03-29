export class AuthToken {
  username: string;
  accessToken: string;
  authorities: Array<string>;

  public constructor(init?: Partial<AuthToken>) {
    Object.assign(this, init);
  }
}
