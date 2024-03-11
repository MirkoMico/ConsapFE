import { Component, OnInit } from '@angular/core';
import { Richieste } from '../../../richieste';
import { RichiestaServiceService } from '../../../richiesta-service.service';
import { error } from 'console';
import { Router } from '@angular/router';
import { StatiService } from '../../../stati.service';


@Component({
  selector: 'app-inserimento-richiesta',
  templateUrl: './inserimento-richiesta.component.html',
  styleUrl: './inserimento-richiesta.component.css'
})
export class InserimentoRichiestaComponent implements OnInit {

  nuovaRichiesta: Richieste= new Richieste

  applicativi: any ;
  statiRichiestaConsap: any;
  statiApprovazioneConsap: any;
  statiRichiesteOs: any;
  statiApprovazioneOs: any;


  
  getRichiesteApplicativo(){
    this.stati.getRichiesteApplicatico().subscribe(data=>{
      console.log(data); 
      this.applicativi=data;
    })
  }
  getStatoRichiestaConsap(){
    this.stati.getStatoRichiestaConsap().subscribe(data=>{
      console.log(data);
      this.statiRichiestaConsap=data;
    })
  }
  getStatiApprovazioneConsap(){
    this.stati.getApprovazioneConsap().subscribe(data=>{
      console.log(data)
      this.statiApprovazioneConsap=data
    })
  }
  getStatirichiesteOs(){
    this.stati.getstatoRichiestaOs().subscribe(data=>{
      console.log(data);
      this.statiRichiesteOs=data
      
    })
  }
  getStatiapprovazioniOs(){
    this.stati.getstatoApprovazioneOs().subscribe(data =>{
      console.log(data);
      this.statiApprovazioneOs=data
      
    })
  }

  

  onSubmit(){
    console.log(this.nuovaRichiesta);
    this.saveRichiesta()
    
  }


  constructor(private richiestaService: RichiestaServiceService, private router: Router, private stati: StatiService){}

  saveRichiesta(){
    this.richiestaService.createRichiesta(this.nuovaRichiesta).subscribe( data=>{
      console.log(data);
      
    },error=>console.log(error));
    
  }

  vaiElenco(){
    this.router.navigate(['/elenco-richiesta'])

  }



  ngOnInit(): void {
    this.getRichiesteApplicativo();
    this.getStatoRichiestaConsap();
    this.getStatiApprovazioneConsap();
    this.getStatirichiesteOs();
    this.getStatiapprovazioniOs();
     


  }

}
