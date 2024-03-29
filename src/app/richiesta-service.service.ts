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

  public createRichiesta(richieste:string){
    const headers= {'Content-Type': 'application/json'}
    return  this.http.post(`${this.baseUrl}`,richieste,{headers});
  }

  public getRichiestaById(id: any):Observable<Richieste>{
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  public putRichiesta(id:number, richieste:String){
   const headers= {'Content-Type': 'application/json'}
    return  this.http.put(`${this.baseUrl}/${id}`,richieste,{headers});

  }
  public deleteRichiesta(id:number){
   // const headers= {'Content-Type': 'application/json'}
     return  this.http.delete(`${this.baseUrl}/${id}`);
 
   }
  


}
