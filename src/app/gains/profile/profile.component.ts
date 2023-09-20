import { ModalService } from 'src/app/application_services/modal.service';
import { IprofileCollection } from '../annotations/gains.interface';
import { GainsService } from '../services/gains.service';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent {
  @Input() profile!: IprofileCollection;
  $currentList!: Observable<any[]>;
  $exerciseList!: Observable<any[]>;

  showModal: boolean = false;
  constructor(
    private gainsService: GainsService,
    public modalService: ModalService) { }

  ngOnInit() {
    // this.$currentList = this.gainsService.getProfileProgram('realId');
    this.$exerciseList = this.gainsService.getExercises();
    // this.$currentProfile = this.gainsService.getProfile(id)
  }

  addLog(profileId) {
    console.log(profileId)
    // this.gainsService.addLog(profileId)
  }

  addExercise(profileId) {
    this.modalService.open('modal-1');
    setTimeout(() => {
      this.showModal = true;
    }, 2000)
    // this.gainsService.addExercise(profileId);
  }

  addExerciseToUserProgram() {

  }

  getProfile(id){
    this.gainsService.getProfile(id)
  }

  getProfileExercises(id){
    this.gainsService.getProfileExercises(id)
  }

  selectUser(id){
    this.gainsService.setCurrentUser(id);
  }

}
