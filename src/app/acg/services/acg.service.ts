import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from 'rxjs';
import { IChapterCollection, INovelCollection } from 'src/app/gains/annotations/acg.interface';

@Injectable({
  providedIn: 'root'
})
export class ACGService {
  static urlBase = 'https://localhost:4000/api/acg'
  static headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getAllNovels(){
    console.log('here')
    return this.http.get<INovelCollection[]>(`${ACGService.urlBase}/novels`);
  }

  getAllChapters(novelId){
    return this.http.get<IChapterCollection[]>(`${ACGService.urlBase}/${novelId}`);
  }
  getChapter(novelId, chapterNumber){
    return this.http.get<IChapterCollection[]>(`${ACGService.urlBase}/${novelId}/${chapterNumber}`);
  }

  // register(user:User){
  //   return this.http.post(`${config.apiUrl}/users/register`,user);
  // }
  
  // delete(id){
  //   return this.http.delete(`${config.apiUrl}/users/${id}`);
  // }

}