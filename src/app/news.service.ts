import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import News from './news';
import { environment } from '../environments/environment';

const baseApiUrl = environment.baseApiURL;

// TODO: Remove mock data
const NEWS_LIST: News[] = [
  { id: 1, name: 'News #1' },
  { id: 2, name: 'News #2' },
];

@Injectable()
export class NewsService {

  constructor(
    private http: HttpClient) { }

  getNewsList(): Observable<News[]> {
    return of(NEWS_LIST);
    // TODO: Use real RestAPI endpoint
    /*return this.http.get<New[]>(`${baseApiUrl}/`)
      .pipe(
      catchError(this.handleError('getNews', []))
      );*/
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
