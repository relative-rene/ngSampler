import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, of, throwError } from 'rxjs';
import { IprofileCollection, ItaskListCollection } from './../annotations/gains.interface';
import { IexerciseCollection } from '../annotations/gains.interface';

@Injectable({
  providedIn: 'root'
})
export class GainsService {

  static urlBase = 'http://localhost:4000/api/gains';
  static headers = new HttpHeaders().set('Content-Type', 'application/json');
  public $currentProfile = new BehaviorSubject<IprofileCollection | null>(null);
  public $taskList = new BehaviorSubject<ItaskListCollection | []>([]);
  private $exercisesList = new BehaviorSubject<IexerciseCollection[] | null>(null);

  constructor(private httpClient: HttpClient) {
    this.getExercises().subscribe(res => this.$exercisesList.next(res))
  }

  // Log Collection
  getExerciseLog(id) {
    return this.httpClient.get(`${GainsService.urlBase}/profile/${id}/logs`);
  }

  getExerciseLogs(profileId: string) {
    return this.httpClient.get(`${GainsService.urlBase}/profiles/${profileId}/logs`)
  }

  addExerciseLog(profileId: string) {
    return this.httpClient.get(`${GainsService.urlBase}/profiles/${profileId}/createLog`)
  }

  // Profile Collection
  addProfile(data) {
    const profile = Object.assign({}, { ...data, exercise_list: [], exercise_log: [] })
    console.log('profile', profile)
    return this.httpClient
      .post(`${GainsService.urlBase}/profiles/create`, profile)
      .pipe(catchError(this.errorMgmt))
  }

  getProfiles(): Observable<IprofileCollection[]> | any {
    return this.httpClient.get(`${GainsService.urlBase}/profiles`);
  }

  getCurrentProfile() {
    return this.$currentProfile;
  }

  getTaskList():Observable<ItaskListCollection | any>{
    return this.httpClient.get(`${GainsService.urlBase}/task-list`);
  }

  updateExerciseProgramList(name, isRemoving) {
    let updatedExerciseList, id, newData;
    this.$currentProfile.subscribe((res) => {
      updatedExerciseList = isRemoving ? res!.exercise_list.filter((toRemove) => toRemove !== name) : [...res!.exercise_list, name];
      id = res!._id;
      newData = Object.assign({ ...res }, { exercise_list: updatedExerciseList });
    });

    const url = `${GainsService.urlBase}/profiles/${id}`;
    return this.httpClient.put(url, newData, { responseType: 'text' }).pipe(catchError(this.errorMgmt));
  }

  // ExerciseCollection
  addExercise(data): Observable<IexerciseCollection> | any {
    let url = `${GainsService.urlBase}/exercises/create`, isNewName;
    this.$exercisesList.subscribe((res) => {
      let lowerCaseName = data.name.toLowerCase()
      isNewName = res?.every(v => v.name.toLowerCase() !== lowerCaseName)
    })
    if (isNewName) {
      return this.httpClient.post(url, data, { responseType: 'text' }).pipe(catchError(this.errorMgmt))
    } else {
      console.error('Exercise name exist');
      return of('Duplicate Name Error')
    }
  }

  getExercises(): Observable<any> {
    const url = GainsService.urlBase + '/exercises';
    return this.httpClient.get<Observable<IexerciseCollection[]>>(url);
  }
  
  loadExercises(){
    return this.$exercisesList;
  }

  setCurrentUser(id): void {
    const url = GainsService.urlBase + '/profiles/' + id
    this.httpClient.get<IprofileCollection>(url)
      .subscribe(res => this.$currentProfile.next(res))
  }

  addLog(data) {
    return this.httpClient.post(GainsService.urlBase + '/logs/create', data);
  }

  addTask(data) {
    return this.httpClient.post(GainsService.urlBase + '/add/task', data);
  }

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}

