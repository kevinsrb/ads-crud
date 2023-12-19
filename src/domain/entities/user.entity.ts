import { CustomError } from '../errors/custom.error';


export class UserEntity {

  constructor(
    public id: string,
    public name: string,
    public lastName: string,
    public email: string,
    public emailValidated: boolean,
  ) { }

  static fromObject( object: { [ key: string ]: any; } ) {
    const { id, _id, name, lastName, email, emailValidated,  } = object;

    if ( !_id && !id ) {
      throw CustomError.badRequest( 'Missing id' );
    }

    if ( !name ) throw CustomError.badRequest( 'Missing name' );
    if ( !email ) throw CustomError.badRequest( 'Missing email' );
    if ( !lastName ) throw CustomError.badRequest( 'Missing lastName' );
    if ( emailValidated === undefined ) throw CustomError.badRequest( 'Missing emailValidated' );
    


    return new UserEntity( _id || id, name, lastName, email, emailValidated );

  }


}