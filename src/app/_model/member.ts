export class Member {
  firstName: string;
  lastName: string;
  emailAddress: string;
  username: string;
  password: string;
  passwordConfirm: string;

  public constructor(init?: Partial<Member>) {
    Object.assign(this, init);
  }
}
