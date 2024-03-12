import { Component, OnInit } from '@angular/core';
import { Richieste } from '../../../richieste';
import { RichiestaServiceService } from '../../../richiesta-service.service';
import { error } from 'console';
import { Router } from '@angular/router';
import { StatiService } from '../../../stati.service';
import { CommesseService } from '../../../commesse.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-inserimento-richiesta',
  templateUrl: './inserimento-richiesta.component.html',
  styleUrl: './inserimento-richiesta.component.css'
})
export class InserimentoRichiestaComponent implements OnInit {

 // nuovaRichiesta: Richieste= new Richieste
 nuovaRichiesta!: Richieste;

 addRichiestaForm!: FormGroup;

  applicativi: any ;
  statiRichiestaConsap: any;
  statiApprovazioneConsap: any;
  statiRichiesteOs: any;
  statiApprovazioneOs: any;
  commesse: any;

/* 
  this.nuovaRichiesta={
    numeroTicket: this.addRichiestaForm.value.numeroTicket
    
  }
 */

  addRichiesta(){

    console.log(this.addRichiestaForm.value.statoRichiestaConsap);
    

    this.nuovaRichiesta={

      
      
      numeroTicket: this.addRichiestaForm.value.numeroTicket,
      oggetto: this.addRichiestaForm.value.oggetto,
      applicativo: {applicativoId:this.addRichiestaForm.value.applicativo,descApplicativo: null },
      statoRichiestaConsap:{statoRichiestaConsapId: this.addRichiestaForm.value.statoRichiestaConsap,descStatoRichiestaConsap: null},
      dataCreazione: this.addRichiestaForm.value.dataCreazione,
      statoApprovazioneConsap:{statoApprovazioneConsapId: this.addRichiestaForm.value.statoApprovazioneConsap,descStatoApprovazioneConsap: null},
      statoRichiestaOs: {statoRichiestaOsId: this.addRichiestaForm.value.statoRichiestaOs, descStatoRichiestaOs:null},
      statoApprovazioneOs: {statoApprovazioneOsId: this.addRichiestaForm.value.statoApprovazioneOs,descStatoApprovazioneOs:null},
      dataStimaFine: this.addRichiestaForm.value.dataStimaFine,
      importo: this.addRichiestaForm.value.importo,
      commessaOs: {commessaOsId:this.addRichiestaForm.value.commessaOs,numeroCommessa:null,descCommessaOS:null}

      

    }
    console.log(JSON.stringify(this.nuovaRichiesta));
    
    this.richiestaService.createRichiesta(JSON.stringify(this.nuovaRichiesta)).subscribe((data)=>{
      console.log(data);
      
    }
    )


  }

  


  
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
  getAllCommesse(){
    this.commesseService.getCommesse().subscribe(data=>{
      console.log(data);
      this.commesse=data
      
    })
  }

  

  onSubmit(){
    console.log(this.nuovaRichiesta);
    this.addRichiesta()
    
    
  }


  constructor(private richiestaService: RichiestaServiceService, private router: Router, private stati: StatiService,
    private commesseService: CommesseService){}

 /*  saveRichiesta(){
    this.richiestaService.createRichiesta(this.nuovaRichiesta).subscribe( data=>{
      console.log(data);
      this.vaiElenco();
      
    },error=>console.log(error));
     
  }

  vaiElenco(){
    this.router.navigate(['/elenco-richiesta'])

  }*/


  ngOnInit(): void {
    this.getRichiesteApplicativo();
    this.getStatoRichiestaConsap();
    this.getStatiApprovazioneConsap();
    this.getStatirichiesteOs();
    this.getStatiapprovazioniOs();
    this.getAllCommesse();

    this.addRichiestaForm = new FormGroup({
     
      numeroTicket: new FormControl(null, [Validators.required]),
      oggetto: new FormControl(null, [Validators.required]),
      applicativo: new FormControl(null, [Validators.required]),
      dataCreazione: new FormControl(null, [Validators.required]),
      statoRichiestaConsap: new FormControl(null, [Validators.required]),
      statoRichiestaOs: new FormControl(null, [Validators.required]),
      statoApprovazioneConsap: new FormControl(null, [Validators.required]),
      statoApprovazioneOs: new FormControl(null, [Validators.required]),
      dataStimaFine: new FormControl(null, []),
      importo: new FormControl(null, [Validators.required]),
      commessaOs: new FormControl(null, [Validators.required]),
    })


  }

}
