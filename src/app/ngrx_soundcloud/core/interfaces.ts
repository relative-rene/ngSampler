import { Observable } from 'rxjs';


export interface Selector<T,V> {
  (observable$: Observable<T>): Observable<V>;
}
