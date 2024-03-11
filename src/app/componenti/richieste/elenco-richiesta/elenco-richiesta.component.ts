import { Component, OnInit } from '@angular/core';
import { Richieste } from '../../../richieste';
import { RichiestaServiceService } from '../../../richiesta-service.service';



@Component({
  selector: 'app-elenco-richiesta',
  templateUrl: './elenco-richiesta.component.html',
  styleUrl: './elenco-richiesta.component.css'
})
export class ElencoRichiestaComponent implements OnInit{

  richieste: Richieste[] | undefined

 

  constructor(private richiestaService: RichiestaServiceService){}
  ngOnInit(): void {
    this.getRichieste();
  }
  getRichieste(){
    this.richiestaService.getRichieste().subscribe(data=>{
      console.log(data);
      
      this.richieste=data;
    })

  }

}
