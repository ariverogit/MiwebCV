import { Component, OnInit } from '@angular/core';
import { DatoshtmlService } from '../../servicios/datoshtml.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrl: './estudios.component.css'
})
export class EstudiosComponent implements OnInit{
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
