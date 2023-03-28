import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifServicesService } from '../services/gif-services.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

    
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private GifServicesService: GifServicesService){

  }
   buscar(){
    const valor = this.txtBuscar.nativeElement.value;

    if (valor.trim().length===0){
      return ;
    }

    this.GifServicesService.buscarGifs(valor)
    this.txtBuscar.nativeElement.value=''
  
   }
}
