import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cs_user',
  templateUrl: './cs_user.component.html',
  styleUrls: ['./cs_user.component.scss']
})
export class CSUserComponent implements OnInit {
  title = 'app works!';
  files = [];
  ngOnInit() {
    let inputElement = document.getElementById("input");
    inputElement?.addEventListener("change", this.handleFiles, false);
  }
  handleFiles() {
    let fileList: string[] = this.files;
    this.renameFile(fileList[0]);
  }

  renameFile(file:string) {
    console.log('file ', file)

    let form = new FormData();
    form.append('hello', 'what');
    form.append('you', 'midget');
    form.append('form', 'data');
    console.log('form ', form);
  }
}