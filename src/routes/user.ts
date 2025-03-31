import express from 'express';
import { UserHttpsHandler } from '../handler/user';

const router = express.Router();


const userHttpsHandler = new UserHttpsHandler();

router.get('/', userHttpsHandler.getUser);
router.get('/:id', userHttpsHandler.getUserById);
router.post('/:id', userHttpsHandler.updateUser);
router.delete('/:id', userHttpsHandler.deleteUser);

export default router;