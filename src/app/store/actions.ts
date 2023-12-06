import { RegisterRequestInterface } from './../application_components/types/registerRequest.interface';
import { CurrentUserInterface } from '../application_components/types/currentUser.interface';
import { createAction, createActionGroup, props } from '@ngrx/store';
import { BackendErrorsInterface } from '../application_components/types/backendErrors.interface';

export const authActions = createActionGroup({
    source: 'auth',
    events: {
        Register: props<{ request: RegisterRequestInterface }>(),
        'Register success': props<{ currentUser: CurrentUserInterface }>(),
        'Register failure': props<{ errors: BackendErrorsInterface }>(),
    }
})

export const register = createAction(
    '[Auth] Register',
    props<{request:RegisterRequestInterface}>())
export const registerSuccess = createAction(
    '[Auth] Register Success',
    props<{ currentUser: CurrentUserInterface }>())
export const registerFailure = createAction(
    '[Auth] Register Failure',
    props<{ errors: BackendErrorsInterface }>())