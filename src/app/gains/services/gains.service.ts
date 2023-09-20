import { IprofileCollection } from './../annotations/gains.interface';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { IexerciseCollection, IlogCollection } from '../annotations/gains.interface';

@Injectable({
  providedIn: 'root'
})
export class GainsService {

  static urlBase = 'http://localhost:4000/api/gains';
  static headers = new HttpHeaders().set('Content-Type', 'application/json');
  private $currentProfile = new BehaviorSubject<IprofileCollection|null>(null);
  constructor(private httpClient: HttpClient) { }

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

  getProfiles():Observable<IprofileCollection[]> | any {
    return this.httpClient.get(`${GainsService.urlBase}/profiles`);
  }

  getProfile(id) {
    return this.$currentProfile.subscribe(profile=> profile)
  }

  getProfileExercises(id):Observable<any>{
    return this.httpClient.get<Observable<IlogCollection[]>>(`${GainsService.urlBase}/profile/${id}/exercises`)
  }

  // ExerciseCollection
  addExercise(data): Observable<IexerciseCollection> | any {
    let url = `${GainsService.urlBase}/exercises/create`;
    return this.httpClient.post(url, data).pipe(catchError(this.errorMgmt))
  }

  getExercises(): Observable<any> {
    const url = GainsService.urlBase + '/exercises';
    return this.httpClient.get<Observable<IexerciseCollection[]>>(url);
  }

  setCurrentUser(id):void{
    const url = GainsService.urlBase+'/profiles/'+id
    this.httpClient.get<IprofileCollection>(url)
      .subscribe(res =>  {
        console.log('setCurrentUser ', res);
        this.$currentProfile.next(res);
      })
  }

  addLog(data) {
    return this.httpClient.post(GainsService.urlBase + '/logs/create', data);
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

