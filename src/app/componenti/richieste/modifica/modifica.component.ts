import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RichiestaServiceService } from '../../../richiesta-service.service';


@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrl: './modifica.component.css'
})
export class ModificaComponent implements OnInit {

  rich:any;


  constructor(private route:ActivatedRoute, private router:Router, private richiestaService: RichiestaServiceService){}


  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.rich = JSON.parse(params['pippo']);
    }); 
   
  }

}
