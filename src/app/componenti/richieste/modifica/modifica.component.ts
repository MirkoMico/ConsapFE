import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RichiestaServiceService } from '../../../richiesta-service.service';
import { Richieste } from '../../../richieste';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StatiService } from '../../../stati.service';
import { CommesseService } from '../../../commesse.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrl: './modifica.component.css'
})
export class ModificaComponent implements OnInit {

  rich:any;
  private baseUrl = 'http://localhost:8080/richiesta/';

  richiestaModifica!: Richieste;
  id:any;

  addRichiestaModForm!: FormGroup;

  applicativi: any ;
  statiRichiestaConsap: any;
  statiApprovazioneConsap: any;
  statiRichiesteOs: any;
  statiApprovazioneOs: any;
  commesse: any;

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




  constructor(private route:ActivatedRoute, private router:Router, private richiestaService: RichiestaServiceService,private stati: StatiService,
    private commesseService: CommesseService, private http: HttpClient){}


  ngOnInit(): void {
    
   /*  this.route.queryParams.subscribe(params=>{
      this.rich = JSON.parse(params['pippo']);
    });  */

    this.id=this.route.snapshot.paramMap.get('id');
    this.http.get(this.baseUrl+this.id).subscribe((data) =>{
      console.log(data);
      
      this.rich =data;

      this.getRichiesteApplicativo();
      this.getStatoRichiestaConsap();
      this.getStatiApprovazioneConsap();
      this.getStatirichiesteOs();
      this.getStatiapprovazioniOs();
      this.getAllCommesse();
     

      this.addRichiestaModForm = new FormGroup({
     
        numeroTicket: new FormControl(null, [Validators.required]),
        oggetto: new FormControl(null, [Validators.required]),
        applicativo: new FormControl(this.rich.applicativo.applicativoId, [Validators.required]),
        dataCreazione: new FormControl(null, [Validators.required]),
        statoRichiestaConsap: new FormControl(this.rich.statoRichiestaConsap.statoRichiestaConsapId, [Validators.required]),
        statoRichiestaOs: new FormControl(this.rich.statoRichiestaOs.statoRichiestaOsId, [Validators.required]),
        statoApprovazioneConsap: new FormControl(this.rich.statoApprovazioneConsap.statoApprovazioneConsapId, [Validators.required]),
        statoApprovazioneOs: new FormControl(this.rich.statoApprovazioneOs.statoApprovazioneOsId, [Validators.required]),
        dataStimaFine: new FormControl(this.rich.dataStimaFine, []),
        importo: new FormControl(this.rich.importo, [Validators.required]),
        commessaOs: new FormControl(this.rich.commessaOs.commessaOsId, [Validators.required]),
      })

      console.log(this.addRichiestaModForm+' richiesta ricevuta');
      
  

      


    })
    

  
  
}

modRichiesta(){

  
  this.richiestaModifica={
   
    
    numeroTicket: this.addRichiestaModForm.value.numeroTicket,
    oggetto: this.addRichiestaModForm.value.oggetto,
    applicativo: {applicativoId:this.addRichiestaModForm.value.applicativo,descApplicativo: null },
    statoRichiestaConsap:{statoRichiestaConsapId: this.addRichiestaModForm.value.statoRichiestaConsap,descStatoRichiestaConsap: null},
    dataCreazione: this.addRichiestaModForm.value.dataCreazione,
    statoApprovazioneConsap:{statoApprovazioneConsapId: this.addRichiestaModForm.value.statoApprovazioneConsap,descStatoApprovazioneConsap: null},
    statoRichiestaOs: {statoRichiestaOsId: this.addRichiestaModForm.value.statoRichiestaOs, descStatoRichiestaOs:null},
    statoApprovazioneOs: {statoApprovazioneOsId: this.addRichiestaModForm.value.statoApprovazioneOs,descStatoApprovazioneOs:null},
    dataStimaFine: this.addRichiestaModForm.value.dataStimaFine,
    importo: this.addRichiestaModForm.value.importo,
    commessaOs: {commessaOsId:this.addRichiestaModForm.value.commessaOs,numeroCommessa:null,descCommessaOS:null}

    

  }
  console.log(JSON.stringify(this.richiestaModifica));
  //const id =localStorage.getItem('id')
  
  this.richiestaService.putRichiesta(this.id,JSON.stringify(this.richiestaModifica)).subscribe((data)=>{
    console.log(data);
  }
  )
  this.router.navigate(['/elenco-richiesta'])
}
deleteRichiesta(){
  this.richiestaService.deleteRichiesta(this.id).subscribe((data)=>{
    console.log(data + this.id);
    this.router.navigate(['/elenco-richiesta'])
    
  })
}

onSubmit(){
  console.log(this.richiestaModifica);
  this.modRichiesta(); 
}


}
