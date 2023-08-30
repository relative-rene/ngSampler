import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { Observable, Subject, of} from 'rxjs';
import { SearchService } from '../../_services/search.service';
import { Imentor } from '../../_interfaces/mentor.interface';
import { ToastComponent } from '../../shared/toast/toast.component';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-search-mentor',
  templateUrl: './search-mentor.component.html',
  styleUrls: ['./search-mentor.component.css'],
  providers: [UserService, SearchService]
})

export class SearchMentorComponent implements OnInit {
  // subscribe to this Observable in our component.
  private profiles: Observable<Imentor[]>;
  // A Subject is a sort of bridge or proxy that is available in some implementations of ReactiveX that acts both as an observer and as an Observable.
  private searchTerms = new Subject<string>();
  private profile: any = {};

  constructor(
    private toast: ToastComponent,
    private searchService: SearchService,
    private userService: UserService) { }

  search(term: string): void {
    // Push a new search term to all Subscribers
    this.searchTerms.next(term);
  }

  approveMentor(id, profile) {
    this.profile['mentorStatus'] = 'Approved';
    this.userService.updateById(id._id, this.profile)
      .subscribe(res => {
        this.profile = {};
        this.toast.setMessage('Profile Approved for mentorship program', 'success');
      });
  }

  ngOnInit(): void {
    // Each time there is a new value emitted from our Observable Angular updates the view.
    this.profiles = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.searchService.searchProfiles(term)
        // or the observable of empty mentor if there was no search term
        : of<Imentor[]>([]))
      .catch(error => {
        console.log(error);
        return of<Imentor[]>([]);
      });
  }
}
