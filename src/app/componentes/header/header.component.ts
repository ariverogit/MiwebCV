import { Component, OnInit } from '@angular/core';
import { DatoshtmlService } from '../../servicios/datoshtml.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  miDatoh:any;
 

  constructor(private datosh:DatoshtmlService){

  }

  ngOnInit(): void{
    this.datosh.obtenerDatos().subscribe(datah=>{
      console.log(datah);
      this.miDatoh=datah;
      
    });

  }

}
