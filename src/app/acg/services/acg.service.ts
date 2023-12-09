import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IChapterCollection, INovelCollection } from 'src/app/gains/annotations/acg.interface';
import { BehaviorSubject } from 'rxjs';
import { textChapterCleanUp } from '../helper/textSanitizer';
@Injectable({
  providedIn: 'root'
})
export class ACGService {
  static urlBase = 'http://localhost:4000/api/acg'
  static headers = new HttpHeaders().set('Content-Type', 'application/json');
  public $novelsList = new BehaviorSubject<INovelCollection[] | []>([])
  public $chaptersList = new BehaviorSubject<IChapterCollection[] | []>([])
  public $chapters = new BehaviorSubject<IChapterCollection[] | []>([]);
  constructor(private http: HttpClient) {
    this.getAllNovels();
    // this.getAllChaptersFromNovel("Super Gene")
    // this.getChapter('Super Gene', 'Chapter 25').subscribe(res => this.$chapters.next(res));
    // this.sanitizeCode()
  }

  getAllNovels() {
    return this.http.get<INovelCollection[]>(`${ACGService.urlBase}/novels`).subscribe(res => this.$novelsList.next(res));
  }

  loadAllNovels() {
    return this.$novelsList;
  }

  getAllChaptersFromNovel(novelId) {
    return this.http.get<IChapterCollection[]>(`${ACGService.urlBase}/chapters/${novelId}`)
      .subscribe(res => this.$chaptersList
        .next(res));
  }

  loadAllChaptersFromNovel() {
    return this.$chaptersList;
  }

  getChapter(novelId, chapterNumber) {
    // let params = { novel_id: novelId, description: chapterNumber }
    return this.http.get<IChapterCollection[]>(`${ACGService.urlBase}/chapters/${novelId}/chapter/${chapterNumber}`);
  }
  loadChapters() {
    return this.$chapters;
  }

  updateChapter(objStringId, data) {
    let bodyData = { _id: objStringId, "newObj": data }
    return this.http.put(`${ACGService.urlBase}/chapters/updateOne`, bodyData)
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
