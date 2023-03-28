import { Component } from '@angular/core';
import { GifServicesService } from '../../gifs/services/gif-services.service';
import { GifsPageComponent } from '../../gifs/gifs-page/gifs-page.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  
  get historial(){
    return this.GifServicesService.historial
  }

   constructor (private GifServicesService: GifServicesService){}

   buscar(termino:string){
    this.GifServicesService.buscarGifs(termino)
   }
}

