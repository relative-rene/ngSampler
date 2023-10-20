import { Observable } from 'rxjs';
import { IprofileCollection } from './../annotations/gains.interface';
import { Component } from '@angular/core';
import { GainsService } from '../services/gains.service';

@Component({
  selector: 'profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent {
  $profiles!:Observable<IprofileCollection[]>;
  constructor(public gainsService: GainsService) { }

  ngOnInit(){
    this.$profiles = this.gainsService.getProfiles();
  }
}
