
export class UpdateUserDto {

  private constructor(
    public name: string,
    public lastName: string,
  ) {}

  static update( object: { [key:string]:any } ): [string?, UpdateUserDto?] {
    const { name, lastName } = object;

    if ( !name ) return ['Missing name'];
    if ( !lastName ) return ['Missing lastName'];

    return [undefined, new UpdateUserDto(name,  lastName)];

  }


}