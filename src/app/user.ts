export class User {
  constructor(
    public firstName: string,
    public lastName: string,
    public id: number,
    public birthday: string,
    public email: string,
    public password: string,
    public phone?: number,
    public status?: string
  ) {}
}
