import { Component } from '@angular/core';
import { PostService } from 'src/services/post.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts!: Post[];


  constructor(private postsService: PostService) {
    this.name = "Robert",
      this.email = "roberts@gmail.com",
      this.address = {
        street: '6 Boom St.',
        city: 'Boston',
        state: 'MA'
      }
    this.hobbies = ['Music', 'Movies', 'Sports'];
    this.showHobbies = false;
    this.postsService.getPost()
    .subscribe((posts:any) => {
      this.posts = posts;
    })
  }
  toggleHobbies() {
    if (this.showHobbies == true) {
      this.showHobbies = false;
    } else {
      this.showHobbies = true;
    }
  }
  addHobby(hobby:string) {
    this.hobbies.push(hobby);
    console.log(hobby);
  }
  deleteHobby(i:number) {
    this.hobbies.splice(i, 1);
  }
}
export interface address {
  street: string;
  city: string;
  state: string;
}
export interface Post {
  id: number;
  title: string;
  body: string;
}
