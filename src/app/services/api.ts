import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Iauthor} from '../interfaces/iauthor';
import {Icovid} from '../interfaces/icovid';

@Injectable({
  providedIn: 'root'
})
export class Api {

  constructor(private http: HttpClient) { }

  baseURL: string = "https://disease.sh/v3/covid-19/";

  GetAllAuthors(): Observable<Icovid[]> {
    return this.http.get<Icovid[]>(this.baseURL + "countries");
  }
}
