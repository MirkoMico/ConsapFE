import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Richieste } from './richieste';



@Injectable({
  providedIn: 'root'
})
export class RichiestaServiceService {

  


  private baseUrl = 'http://localhost:8080/richiesta';
  
 
  constructor(private http:HttpClient) { }

  public getRichieste():Observable<Richieste[]>{
    return this.http.get<any>(`${this.baseUrl}`);
  }

  public createRichiesta(richieste: Richieste): Observable<Object>{
    return  this.http.post(`${this.baseUrl}`,richieste);
  }
  


}
