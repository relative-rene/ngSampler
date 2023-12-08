import express from 'express';
import { getAllUsers, deleteUser, updateUser, } from '../controllers/users.controller';
import { isAuthenticated, isOwner } from '../middlewares';

export default (router: express.Router) => {
    router.post('/profiles/create', isAuthenticated, getAllUsers);
    router.get('/profiles/read', isAuthenticated, isOwner, deleteUser);
    router.get('/profiles/read/:profile_id', isAuthenticated, isOwner, deleteUser);
    router.get('/profiles/:profile_id/exercises', isAuthenticated, isOwner, deleteUser);
    router.put('/profiles/update/:profile_id', isAuthenticated, isOwner, deleteUser);
    router.delete('/profiles/delete/:profile_id', isAuthenticated, isOwner, deleteUser);

    router.post('/exercises/create', isAuthenticated, isOwner, deleteUser);
    router.get('/exercises', isAuthenticated, isOwner, deleteUser);
    router.get('/exercises/read/:exercise_id', isAuthenticated, isOwner, deleteUser);
    router.put('/exercises/update/:exercise_id', isAuthenticated, isOwner, deleteUser);
    router.delete('/exercises/delete/:exercise_id', isAuthenticated, isOwner, deleteUser);

    router.get('/exerciselogs/read', isAuthenticated, getAllUsers);
    router.post('/profiles/:profile_id/create/exerciselogs', isAuthenticated, isOwner, deleteUser);
    router.get('/profile/:profile_id/exerciselogs/:exerciselog_id', isAuthenticated, isOwner, deleteUser);
    router.put('/profile/:profile_id/exerciselogs/:exerciselog_id', isAuthenticated, isOwner, deleteUser);
    router.delete('/profile/:profile_id/exerciselogs/:exerciselog_id', isAuthenticated, isOwner, deleteUser);

}
