import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  addNew(usercreds) {
    var headers = new HttpHeaders();
    var creds = 'name=' + usercreds.username + '&password=' + usercreds.password;
    var emailid = 'name=' + usercreds.username;

    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    this.http.post('http://localhost:3333/adduser', creds, { headers: headers }).subscribe((data) => {
      if (data['success']) {
        this.http.post('http://localhost:3333/sendmail', emailid, { headers: headers }).subscribe((data) => {
          if (data['success']) {
            console.log('mail sent');
          }
        })
      }
    }
    )
  }
}


