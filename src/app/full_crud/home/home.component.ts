import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { ToastComponent } from '../shared/toast/toast.component';

import { DataService } from '../services/data.service';
export interface Cat {
  name?: string,
  age?: number,
  weight?: string,
  _id?: string

}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cats: Array<Cat> = [];
  public isLoading = true;

  public cat: Cat = {};
  public isEditing = false;

  public addCatForm!: FormGroup;
  private name = new FormControl("", Validators.required);
  private age = new FormControl("", Validators.required);
  private weight = new FormControl("", Validators.required);

  constructor(private http: HttpClient,
    private dataService: DataService,
    public toast: ToastComponent,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getCats();

    this.addCatForm = this.formBuilder.group({
      name: this.name,
      age: this.age,
      weight: this.weight
    });
  }

  getCats() {
    this.dataService.getCats().subscribe(
      {
      next: data=> this.cats = [data],
      error: error => console.log(error),
      complete: () => this.isLoading = false
      }
    );
  }

  addCat() {
    this.dataService.addCat(this.addCatForm.value).subscribe(
      res => {
        this.cats.push(res);
        this.addCatForm.reset();
        this.toast.setMessage("item added successfully.", "success");
      },
      error => console.log(error)
    );
  }

  enableEditing(cat) {
    this.isEditing = true;
    this.cat = cat;
  }

  cancelEditing() {
    this.isEditing = false;
    this.cat = {};
    this.toast.setMessage("item editing cancelled.", "warning");
    // reload the cats to reset the editing
    this.getCats();
  }

  editCat(cat) {
    this.dataService.editCat(cat).subscribe(
      res => {
        this.isEditing = false;
        this.cat = cat;
        this.toast.setMessage("item edited successfully.", "success");
      },
      error => console.log(error)
    );
  }

  deleteCat(cat) {
    if (window.confirm("Are you sure you want to permanently delete this item?")) {
      var pos = this.cats.filter(cat => { return cat._id }).indexOf(cat._id);
      this.cats.splice(pos, 1);
      this.toast.setMessage("item deleted successfully.", "success");
    }
    this.dataService.deleteCat(cat)
  }
}
