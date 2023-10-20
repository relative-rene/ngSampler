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
  public $currentList!: Observable<any[]>;
  public $exerciseList!: Observable<any[]>;
  public selectdExercises!: string[];
  public editUser: IprofileCollection | undefined;

  public isAdmin: boolean = true;
  public showModal: boolean = false;
  constructor(
    public gainsService: GainsService,
    public modalService: ModalService) { }

  ngOnInit() {
    this.$exerciseList = this.gainsService.getExercises();
  }

  addLog(profileId) {
    console.log(profileId)
  }

  addExercise() {
    this.gainsService.$currentProfile.subscribe(res => this.selectdExercises = res!.exercise_list);
    console.log('selectdExercises', this.selectdExercises)
    this.modalService.open('modal-1');
  }

  updateUserProgram(newExercise, isRemoving) {
    return this.gainsService.updateExerciseProgramList(newExercise, isRemoving).subscribe(res => res)
  }

  selectUser(id) {
    this.gainsService.setCurrentUser(id);
  }

  displayEditPage(profile) {
    this.editUser = profile;
    this.modalService.open('editProfileModal');
  }

}
