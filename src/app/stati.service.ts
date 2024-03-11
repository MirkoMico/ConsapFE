import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatiService {

  constructor(private http:HttpClient) { }



  private baseUrl = 'http://localhost:8080';



  
  public getRichiesteApplicatico(){
    return this.http.get(`${this.baseUrl}/applicativo`);
  }
  public getStatoRichiestaConsap(){
    return this.http.get(`${this.baseUrl}/statoRichiestaConsap`);
  }

  public getstatoRichiestaOs(){
    return this.http.get(`${this.baseUrl}/statoRichiestaOs`);
  }
  public getstatoApprovazioneOs(){
    return this.http.get(`${this.baseUrl}/statoApprovazioneOs`);
  }
  public getApprovazioneConsap(){
    return this.http.get(`${this.baseUrl}/statoApprovazioneConsap`);
  }


}

