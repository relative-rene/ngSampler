import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public loading = false;
  public submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(6)]
    })
  }
  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    this.alertService.clear();
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    this.userService.register(this.registerForm.value)
      .pipe(first()).subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login'])
        },
        err => {
          this.alertService.error(err);
          this.loading = false;
        },
        () => console.log('complete'))
  }

}
