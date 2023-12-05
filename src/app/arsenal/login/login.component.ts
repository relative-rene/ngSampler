import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { contentHeaders } from '../common/headers';

@Component({
  selector: 'login-comp',
  templateUrl: './login.component.html',
  styleUrls: ["login.component.scss"]
})
export class LoginComponent {
  constructor(private router: Router, private http: HttpClient) {
  }

  login(event, username, password) {
    event.preventDefault();
    let body = JSON.stringify({ username, password });
    this.http.post('http://localhost:3001/sessions/create', body, { headers: contentHeaders })
      .subscribe(
        response => {
          localStorage.setItem('id_token', response['id_token']);
          this.router.navigate(['home']);
        },
        error => {
          alert(error.text());
          console.log(error.text());
        },
        () => console.log('complete ')
      );
  }

  signup(event) {
    event.preventDefault();
    this.router.navigate(['signup']);
  }
}
