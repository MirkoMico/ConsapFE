import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commesse } from './commesse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommesseService {

  private baseUrlCommesse = 'http://localhost:8080/commessaOs';
  constructor(private http: HttpClient) { }


  public getCommesse():Observable<Commesse[]>{
    return this.http.get<any>(`${this.baseUrlCommesse}`);
  }
}
