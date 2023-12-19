import { Request, Response } from 'express';
import { CustomError, RegisterUserDto } from '../../domain';
import { UserService } from '../services/user.service';
import { UpdateUserDto } from '../../domain/dtos/user/update-user.dto';



export class UserController {

  
  constructor(
    public readonly userService: UserService,
  ) {}

  private handleError = (error: unknown, res: Response ) => {
    if ( error instanceof CustomError ) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    console.log(`${ error }`);
    return res.status(500).json({ error: 'Internal server error' })
  } 


  registerUser = (req: Request, res: Response) => {
    const [error, registerDto] = RegisterUserDto.create(req.body);
    if ( error ) return res.status(400).json({error})


    this.userService.registerUser(registerDto!)
      .then( (user) => res.json(user) )
      .catch( error => this.handleError(error, res) );
      
  }

  updateUser = (req: Request, res: Response) => {
    const { id } = req.params;
    const [error, updateUserDto] = UpdateUserDto.update(req.body);
    if ( error ) return res.status(400).json({error})


    this.userService.updateUser(id, updateUserDto!)
      .then( (user) => res.json(user) )
      .catch( error => this.handleError(error, res) );
      
  }

  getUsers = (req: Request, res: Response) => {

    this.userService.getUsers()
    .then( (users) => res.json(users) )
    .catch( error => this.handleError(error, res) );
  }


  deleteuserById = (req: Request, res: Response) => {
    const { id } = req.params; 
    console.log({id})
    this.userService.deleteuserById(id)
    .then( (user) => res.json(user) )
    .catch( error => this.handleError(error, res) );
    // this.userService.deleteUserById(id)
    // .catch( error => this.handleError(error, res) );
  }


  validateEmail = (req: Request, res: Response) => {

    res.json('validateEmail');
  }



}