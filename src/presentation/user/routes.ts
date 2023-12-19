import { Router } from 'express';
import { UserController } from './controller';
import { UserService } from '../services/user.service';




export class UserRoutes {


  static get routes(): Router {

    const router = Router();
    const userService = new UserService();

    const controller = new UserController(userService);
    
    // Definir las rutas

    router.put('/:id', controller.updateUser );
    router.post('/register', controller.registerUser );
    router.delete('/:id', controller.deleteuserById );
    router.get('/', controller.getUsers );
    




    return router;
  }


}

