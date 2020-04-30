  import { Injectable } from '@angular/core';

import { HttpClient , HttpHeaders, HttpErrorResponse} from '@angular/common/http'

import { Observable, of, Subject, BehaviorSubject, config } from 'rxjs';

import {count} from './count'

// import 'rxjs/add/operator/catch'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
};


@Injectable({
  providedIn: 'root'
})
export class RestService {

   
  

  constructor(private http: HttpClient) { }

  total_resume(){
    return this.http.get('http://localhost:5000/api/count',httpOptions)
    // return this.http.get<count[]>('http://13.234.238.147:5000/api/')

    // return this.http.get('http://13.234.238.147:5000/api/')
  // return this.http.get('./assets/data/count.json')
  }
  errorHandler(error: HttpErrorResponse){

  }
  sendMail(value): Observable<any> {

    console.log('Json_value', value);

    const params = value;

    return this.http.post( 'http://localhost:5000/api/entity', params);
  }
}
