import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../_services/login.service';
declare let $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent {

  constructor(private LoginService: LoginService, private router: Router) {
    // login test
    // this.Login.login('admin', 'admin').subscribe(res => {
    //   console.log(res);
    // });
  }

  onLogin(form: any) {
    console.log('onLogin',form);
    this.LoginService.login(form.username, form.password).subscribe((res) => {
      if (res) {
        // console.log('onLogin', res);
        // hide modal
        $("#modal-login").modal("hide");
        this.router.navigate(['/home']);
      }
    });
  }

  onCreate(formFirstTime: any) {
    // console.log('onCreate', formFirstTime);
    this.LoginService.create(formFirstTime.username, formFirstTime.password).subscribe((res) => {
      // console.log(res);
      if (res) {
        // hide modal
        $("#modal-first-time").modal("hide");
        this.router.navigate(['/home']);
      }
    });
  }

}
