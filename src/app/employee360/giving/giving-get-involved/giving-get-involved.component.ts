import { Component, OnInit, ViewChild } from '@angular/core';
import { GivingService } from '../../_services/giving.service';
import { GivingSearchResultComponent } from '../giving-search-result/giving-search-result.component';
import { UtilityService } from '../../_services/util.service';

@Component({
  selector: 'app-giving-get-involved',
  templateUrl: './giving-get-involved.component.html',
  styleUrls: ['./giving-get-involved.component.css'],
  providers: [GivingService, UtilityService]
})
export class GivingGetInvolvedComponent implements OnInit {
  events: Object[] = [];
  categories: string[] = [];
  tags: string[] = [];
  @ViewChild('categoryFilterMenu') categoryFilterMenu;
  @ViewChild('stateFilterMenu') stateFilterMenu;
  @ViewChild('sortByFilterMenu') sortByFilterMenu;

  constructor(private service: GivingService, private util: UtilityService) {
    this.categories = this.util.getGivingCategoryList();
    this.tags = this.util.getGivingTagSuggestionsList();
  }

  ngOnInit() {
    this.reloadData();
  }
  delete(event) {
    console.log('d', event);
    this.service.delete(event._id)
      .subscribe(res => {
        this.reloadData();
      });
  }
  reloadData() {
    var category = this.categoryFilterMenu.nativeElement.innerHTML;
    if (category === 'CATEGORY')
      category = '';
    var sortBy = this.sortByFilterMenu.nativeElement.innerHTML;
    if (sortBy === 'SORT BY')
      sortBy = '';
    var state = this.stateFilterMenu.nativeElement.innerHTML;
    if (state === 'STATE')
      state = '';

    if (sortBy === 'Date')
      sortBy = "date";
    if (sortBy === 'Title')
      sortBy = "name";

    this.service.listAllOpen(category, sortBy, state, '')
      .subscribe(res => {
        this.events = res;
      });
  }
  setCategoryFilter(cat) {
    this.categoryFilterMenu.nativeElement.innerHTML = cat;
    this.reloadData();
  }
  setSortByFilter(sort) {
    this.sortByFilterMenu.nativeElement.innerHTML = sort;
    this.reloadData();
  }
  setStateFilter(st) {
    this.stateFilterMenu.nativeElement.innerHTML = st;
    this.reloadData();
  }
}
