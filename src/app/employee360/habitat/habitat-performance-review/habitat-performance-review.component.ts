import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastComponent } from '../../shared/toast/toast.component';
import { ReviewService } from '../../_services/review.service';


@Component({
  selector: 'app-habitat-performance-review',
  templateUrl: './habitat-performance-review.component.html',
  styleUrls: ['./habitat-performance-review.component.css'],
  providers: [ReviewService, ToastComponent]
})

export class HabitatPerformanceReviewComponent implements OnInit {
  public reviews: Array<any> = [];
  private isLoading = true;

  private review = {};
  private isEditing = false;

  private addReviewForm: FormGroup;
  private name = new FormControl("", Validators.required);
  private date = new FormControl("", Validators.required);

  constructor(private http: HttpClient,
    private service: ReviewService,
    private toast: ToastComponent,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getReviews();

    this.addReviewForm = this.formBuilder.group({
      name: this.name,
      date: this.date
    });
  }

  getReviews() {
    this.service.getReviews().subscribe(
      data => this.reviews = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addReview() {
    this.service.addReview(this.addReviewForm.value);
    this.reviews.push(this.addReviewForm.value);
    this.addReviewForm.reset();
    this.toast.setMessage('item added successfully.', 'success');
  }

  enableEditing(review) {
    this.isEditing = true;
    this.review = review;
  }

  cancelEditing() {
    this.isEditing = false;
    this.review = {};
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the reviews to reset the editing
    this.getReviews();
  }

  editReview(review) {
    this.service.editReview(review).subscribe(
      res => {
        this.isEditing = false;
        this.review = review;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  deleteReview(review) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.service.deleteReview(review);
      let pos = this.reviews.map(review => { return review.reviewid }).indexOf(review.reviewid);
      this.reviews.splice(pos, 1);
      this.toast.setMessage('item deleted successfully.', 'success');
    }
  }
}
