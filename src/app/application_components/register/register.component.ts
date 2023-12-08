import { Component } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { authActions } from "../../../app/store/actions";
import { Store, StateObservable, provideState, StoreModule } from "@ngrx/store";

import { RegisterRequestInterface } from "../types/registerRequest.interface";
import { authFeatureKey, authReducer, selectIsSubmitting } from "src/app/store/reducers";
import { AuthStateInterface } from "../types/authState.interface";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { combineLatest } from "rxjs";
import { selectValidationErrors } from "src/app/store/reducers";
import { BackendErrorMessages } from "../backendErrors/backendErrors.component";
import { AppStoreModule } from "../../app-store.module"

@Component({
    selector: 'ngs-register',
    templateUrl: './register.component.html',
    standalone: true,
    imports: [ReactiveFormsModule, RouterLink, CommonModule, BackendErrorMessages, AppStoreModule],
    providers: []
})
export class RegisterComponent {
    registerForm = this.fb.nonNullable.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required]
    })
    data$ = combineLatest({
        isSubmitting$: this.store.select(selectIsSubmitting),
        backendErrors: this.store.select(selectValidationErrors)
    });

    constructor(
        private fb: FormBuilder,
        private store: Store<{ auth: AuthStateInterface }>) { }

    onSubmit() {
        const request: RegisterRequestInterface = {
            user: this.registerForm.getRawValue()
        }
        this.store.dispatch(authActions.register({ request }))
    }
}