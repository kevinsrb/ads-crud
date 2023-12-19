import { UserModel } from '../../data';
import { CustomError, RegisterUserDto, UserEntity } from '../../domain';
import { UpdateUserDto } from '../../domain/dtos/user/update-user.dto';


export class UserService {

  constructor() {}


  public async registerUser( registerUserDto: RegisterUserDto ) {

    const existUser = await UserModel.findOne({ email: registerUserDto.email });
    if ( existUser ) throw CustomError.badRequest('Email already exist');

    try {
      const user = new UserModel(registerUserDto);

      await user.save();
      const { ...userEntity } = UserEntity.fromObject(user);
      return userEntity;
     

    } catch (error) {
      throw CustomError.internalServer(`${ error }`);
    }

  }

  public async getUsers(){
    const users = await UserModel.find();
    return users;
  }


  public async updateUser( id:string, updateUserDto: UpdateUserDto ) {

    const existUser = await UserModel.findById( id );
    if ( !existUser ) throw CustomError.badRequest('user does not exist');

    try {
   
     const resp = await UserModel.findOneAndUpdate({_id: id}, updateUserDto, {new:true})
      return resp;

    } catch (error) {
      throw CustomError.internalServer(`${ error }`);
    }

  }

  public async deleteuserById(id: string){
    const existUser = await UserModel.findById( id );
    if ( !existUser ) throw CustomError.badRequest('user does not exist');

    try {
  
    const resp = await UserModel.findOneAndRemove({_id: id})    
    return resp;

    } catch (error) {
      throw CustomError.internalServer(`${ error }`);
    }
  }


}