export class User {
  constructor(
    public id?: number | null,
    public email?: string | null,
    public password?: string | null,
    public birthday?: Date | null | undefined,
    public sex?: string | null | undefined,
    public name?:
      | {
          firstname: string | null | undefined;
          lastname: string | null | undefined;
        }
      | null
      | undefined
  ) {}
}
