import { Component, OnInit } from '@angular/core';
import { DatoshtmlService } from '../../servicios/datoshtml.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent implements OnInit{
  miDatoh:any;
  constructor(private datosh:DatoshtmlService){

  }

    
  ngOnInit(): void {
    this.datosh.obtenerDatos().subscribe(datah=>{
      console.log(datah);
      this.miDatoh=datah;
      
    });
  }



}
