import { Component, OnInit } from '@angular/core';
import { Commesse } from '../../../commesse';
import { CommesseService } from '../../../commesse.service';

@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.component.html',
  styleUrl: './elenco.component.css'
})
export class ElencoComponent implements OnInit {

  commesse: Commesse[] | undefined

  constructor(private commesseServive: CommesseService){}
  
  ngOnInit(): void {
    this.getCommesse();
   
  }

  getCommesse(){
    this.commesseServive.getCommesse().subscribe(data=>{
      this.commesse=data;
    })
  }

}
