import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataobsService {
  apiUrl = 'https://rickandmortyapi.com/api/character'; //url


  constructor(private http: HttpClient) { }

  getData(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never>{
    console.error('An error ocurred: ', error);
    return throwError('Something went wrong. Please try again later.');
  }

}
