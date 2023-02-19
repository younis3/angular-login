export class User {
  constructor(
    public id?: number | null,
    public email?: string | null,
    public password?: string | null,
    public name?:
      | {
          firstname: string | null | undefined;
          lastname: string | null | undefined;
        }
      | null
      | undefined
  ) {}
}
