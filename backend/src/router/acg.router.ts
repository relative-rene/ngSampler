import express from 'express';
import { getAllUsers, deleteUser, updateUser, } from '../controllers/users.controller';
import { isAuthenticated, isOwner } from '../middlewares';

export default (router: express.Router) => {
    router.post('/novels/create', isAuthenticated, getAllUsers);
    router.get('/novels', isAuthenticated, isOwner, deleteUser)
    router.get('/novels/:novel_id', isAuthenticated, isOwner, updateUser)
    router.put('/novels/update/:novel_id', isAuthenticated, isOwner, updateUser)
    router.delete('/novels/delete/:novel_id', isAuthenticated, isOwner, updateUser)

    router.get('/chapters/:novel_id', isAuthenticated, isOwner, updateUser)
    router.get('/chapters/:novel_id/chapter/:description', isAuthenticated, isOwner, updateUser)
    router.put('/chapters/updateOne', isAuthenticated, isOwner, updateUser)
}