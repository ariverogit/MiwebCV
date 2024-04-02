import { Component, OnInit } from '@angular/core';
import { DatoshtmlService } from '../../servicios/datoshtml.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{
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
