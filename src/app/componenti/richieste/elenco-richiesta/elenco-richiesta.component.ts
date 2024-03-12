import { Component, OnInit } from '@angular/core';
import { Richieste } from '../../../richieste';
import { RichiestaServiceService } from '../../../richiesta-service.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-elenco-richiesta',
  templateUrl: './elenco-richiesta.component.html',
  styleUrl: './elenco-richiesta.component.css'
})
export class ElencoRichiestaComponent implements OnInit{

  richieste: Richieste[] | undefined

 

  constructor(private richiestaService: RichiestaServiceService, private router: Router ){}
  ngOnInit(): void {
    this.getRichieste();
  }
  getRichieste(){
    this.richiestaService.getRichieste().subscribe(data=>{
      console.log(data);
      
      this.richieste=data;
    })

  }
  redirect(richiesta:any){
    console.log(JSON.stringify(richiesta)+"invio?")
    console.log("CI SONO")
    this.router.navigate(["/visualizza"],{queryParams:{pippo : JSON.stringify(richiesta)}});
  } 

  redirectToModif(richiesta:any){
    console.log(JSON.stringify(richiesta)+"invio?")
    console.log("CI SONO")
    this.router.navigate(["/visualizza"],{queryParams:{pippo : JSON.stringify(richiesta)}});
  } 



 /*  redirect(id:any){
    localStorage.setItem('id',id);
    console.log('ID da passare',id);
    this.router.navigate(["/visualizza"])
  } */

}
