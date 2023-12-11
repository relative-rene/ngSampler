import { ACGService } from '../acg/services/acg.service';
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Observable, shareReplay, tap } from 'rxjs';
import { IChapterCollection } from '../gains/annotations/acg.interface';


export const ChaptersResolver: ResolveFn<IChapterCollection[]> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    chapterFacade: ACGService = inject(ACGService)
  ): Observable<IChapterCollection[]> => chapterFacade.getAllChaptersFromNovel(route.paramMap.get('novel_id'))
    .pipe(
      tap<IChapterCollection[]>((chapter: IChapterCollection[]) => !!chapter),
      shareReplay(1)
    )
  