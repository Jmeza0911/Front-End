import { Component} from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html'
})

export class OrdenarComponent {
  enMayusculas:boolean= true
  ordenarPor:string=''
  heroes: Heroe []=[
    {
      nombre: 'Superman',
      vuela: true,
      color:Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color:Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color:Color.verde
    }
  ]

  constructor(){}

  ngOnInit(): void {
  }
    
  cambiar(){
    this.enMayusculas = !this.enMayusculas
  }
  cambiarOrden(valor:string){
    this.ordenarPor = valor
  }
}
