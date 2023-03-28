import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {
   nombreLower:string = 'alberto'
   nombreUpper:string = 'ALBERTO'
   nombreCompleto:string = 'AlbErtO mAriO'

   fecha : Date = new Date()
}
