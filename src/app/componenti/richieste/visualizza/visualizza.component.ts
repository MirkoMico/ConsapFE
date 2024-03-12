import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { RichiestaServiceService } from '../../../richiesta-service.service';

@Component({
  selector: 'app-visualizza',
  templateUrl: './visualizza.component.html',
  styleUrl: './visualizza.component.css'
})
export class VisualizzaComponent implements OnInit {

  rich:any;



  constructor(private route:ActivatedRoute, private router:Router, private richiestaService: RichiestaServiceService){}
  




  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.rich = JSON.parse(params['pippo']);
    }); 

    /* const id= localStorage.getItem('id')
    console.log('id passato: '+ id)
    this.rich= this.richiestaService.getRichiestaById(id)
     */




  }

}
