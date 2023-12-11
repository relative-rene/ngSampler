import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IChapterCollection, INovelCollection } from 'src/app/gains/annotations/acg.interface';
import { BehaviorSubject, Observable, shareReplay, tap } from 'rxjs';
import { textChapterCleanUp } from '../helper/textSanitizer';
import { environment } from 'src/environments/environment.development';

@Injectable({providedIn:'root'})
export class ACGService {
  static urlBase = 'http://localhost:4000/api/acg'
  static headers = new HttpHeaders().set('Content-Type', 'application/json');
  public $novelsList!:Observable<INovelCollection[]>
  public $chaptersList!:Observable<IChapterCollection[]>;
  public $chapters!:Observable<IChapterCollection[]>;
  // public $novelsList = new BehaviorSubject<INovelCollection[] | []>([]); BehaviorSubject approach
  // public $chaptersList = new BehaviorSubject<IChapterCollection[] | []>([]); BehaviorSubject approach
  // public $chapters = new BehaviorSubject<IChapterCollection[] | []>([]); BehaviorSubject approach
  constructor(public http: HttpClient) {
    // this.getAllNovels();
    // this.getAllChaptersFromNovel("Super Gene")
    // this.getChapter('Super Gene', 'Chapter 25').subscribe(res => this.$chapters.next(res));
    // this.sanitizeCode()
  }

  getAllNovels() {
    if(!this.$novelsList){
    this.$novelsList =  this.http.get<INovelCollection[]>(`${environment.apiACG}/novels`)
      .pipe(tap(()=> console.log('executed getAllNovels')),
      shareReplay(1))
  }
  return this.$novelsList;
}

  loadAllNovels() {
    return this.$novelsList;
  }

  getAllChaptersFromNovel(novelId) {
    console.log('novelId', novelId)
    return this.http.get<IChapterCollection[]>(`${environment.apiACG}/chapters/${novelId}`);
  }

  loadAllChaptersFromNovel() {
    console.log('loadAllChaptersFromNovel')
    return this.$chaptersList;
  }

  getChapter(novelId, chapterNumber) {
    // let params = { novel_id: novelId, description: chapterNumber }
    return this.http.get<IChapterCollection[]>(`${environment.apiACG}/chapters/${novelId}/chapter/${chapterNumber}`);
  }
  loadChapters() {
    return this.$chapters;
  }

  updateChapter(objStringId, data) {
    let bodyData = { _id: objStringId, "newObj": data }
    return this.http.put(`${environment.apiACG}/chapters/updateOne`, bodyData)
  }

  // async sanitizeCode() {
  //   this.loadAllChaptersFromNovel().subscribe((res)=>{
  //     for(let i = 0; i < res.length; i++){
  //       setTimeout(() => {
  //         let obj = textChapterCleanUp(res[i]);
  //         console.log(obj);
  //         this.updateChapter(obj._id, obj).subscribe(reres => reres)
  //       },i * 5000);
  //     }

  //   })
  // }
}
