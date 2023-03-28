import { Component } from '@angular/core';
import { GifServicesService } from '../services/gif-services.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {

  get resultados(){
    return this.GifServicesService.resultados
  }

  constructor (private GifServicesService: GifServicesService){
    
  }
}
