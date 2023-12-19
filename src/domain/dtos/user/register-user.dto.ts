import { regularExps } from '../../../config';




export class RegisterUserDto {

  private constructor(
    public name: string,
    public lastName: string,
    public email: string,
  ) {}

  static create( object: { [key:string]:any } ): [string?, RegisterUserDto?] {
    const { name, email, lastName } = object;

    if ( !name ) return ['Missing name'];
    if ( !email ) return ['Missing email'];
    if ( !lastName ) return ['Missing lastName'];
    if ( !regularExps.email.test( email ) ) return ['Email is not valid'];
 

    return [undefined, new RegisterUserDto(name, lastName, email)];

  }


}