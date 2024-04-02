import { Component, OnInit } from '@angular/core';
import { DatoshtmlService } from '../../servicios/datoshtml.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.css'
})
export class HabilidadesComponent implements OnInit{
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
