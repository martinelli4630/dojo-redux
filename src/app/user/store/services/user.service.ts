import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map, switchMap, catchError, mergeMap, tap } from 'rxjs/operators';

@Injectable()
export class UserService {

  private _url: string;
  private _headers: Headers;

  constructor(private _http: Http) {
    this._url = 'http://localhost:3000/api/user';
    this._headers = new Headers();
    this._headers.append('Content-Type', 'application/json');
  }

  load(): Observable<any> {
    return this._http.get(this._url, { headers: this._headers })
      .pipe(map(res => res.json()));
  }

  Add(user: string): Observable<any> {
    return this._http.post(this._url, JSON.stringify(user), { headers: this._headers })
      .pipe(map(res => res.json()));
  }

  remove(id: string): Observable<any> {
    return this._http.delete(this._url + `/${id}`, { headers: this._headers })
      .pipe(map(res => { }));
  }
}
