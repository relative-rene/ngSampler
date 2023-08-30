import { Component } from '@angular/core';
import {CharityNavigatorService} from '../../_services/charity-navigator.service';

@Component({
  selector: 'app-giving-find-npo',
  templateUrl: './giving-find-npo.component.html',
  styleUrls: ['./giving-find-npo.component.css'],
  providers: [CharityNavigatorService]
})
export class GivingFindNpoComponent {

  private categories;
  private categoryid;
  private showCategories;
  private charities;
  private showCharities;

  constructor(private CharityNavigatorService: CharityNavigatorService) {
    // call service method
    this.CharityNavigatorService
      .getCategories()
      // subscribe to observable
      .subscribe(res => {
        this.showCategories = true;
        this.categories = res.objects;
        console.log('categories', this.categories);
      });
  }

  getCharities(form: any): void {
    this.CharityNavigatorService
      .getCharities(form.search)
      .subscribe(res => {
        this.showCategories = false;
        this.showCharities = true;
        this.charities = res.objects;
        console.log('charities', this.charities);
      });
  }

  getCharitiesByCategory(event: any): void {
    console.log('categoryid', event.target.id);
    this.CharityNavigatorService
      .getCharitiesByCategory(event.target.id)
      .subscribe(res => {
        this.showCategories = false;
        this.showCharities = true;
        this.charities = res.objects;
        console.log('charities', this.charities);
      });
  }

}
