import { Request, Response, NextFunction } from 'express';
import UserController from '../controllers/user';

const userController = new UserController();
export class UserHttpsHandler {
    async getUser(request: Request, response: Response, next: NextFunction) {
        try {
            const users = await userController.getAllUsers();
            response.json(users);
        } catch (error) {
            response.status(500).json({ error: 'Error al obtener los usuarios' });
        }
    }

    async getUserById(request: Request, response: Response, next: NextFunction) {
        
    }

    async updateUser(request: Request, response: Response, next: NextFunction) {

    }

    async deleteUser(request: Request, response: Response, next: NextFunction) {

    }
}