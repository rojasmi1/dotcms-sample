import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import News from '../model/news';
import { environment } from '../../environments/environment';

const baseApiUrl = environment.baseApiURL;

@Injectable()
export class NewsService {

  constructor(
    private http: HttpClient) { }

  getNewsList(): Observable<News[]> {
    return this.http.get<News[]>(`${baseApiUrl}/query/+contentType:News/orderby/News.sysPublishDate%20desc`)
      .pipe(
      map(data => {
        return data['contentlets'].map(element => {
          const identifier : string = element.identifier;
          const title : string = element.title;
          const sysPublishDate : Date = new Date(element.sysPublishDate);
          const imageContentAsset : string = element.imageContentAsset;
          return new News(identifier, title, sysPublishDate, imageContentAsset);
        });
      }),
      catchError(this.handleError('getNewsList', []))
      );
  }

  getNews(identifier:string): Observable<News[]> {
    return this.http.get<News[]>(`${baseApiUrl}/id/${identifier}`)
      .pipe(
      map(data => {
        return data['contentlets'].map(element => {
          const identifier : string = element.identifier;
          const title : string = element.title;
          const sysPublishDate : Date = element.sysPublishDate;
          const imageContentAsset : string = element.imageContentAsset;
          return new News(identifier, title, sysPublishDate, imageContentAsset);
        });
      }),
      catchError(this.handleError('getNews', []))
      );
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
