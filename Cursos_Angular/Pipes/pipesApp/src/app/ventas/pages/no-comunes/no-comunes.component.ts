import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {
  //i18Select
  nombre: string = 'Mario'
  genero : string ='masculino'

  invitacionMapa={
    'masculino':'invitarlo',
    'femenino': 'invitarla'
  
  }
  //i18Plural
  clientes:string[]=['Maria','Pedro','Pablo']
  clientesMapa={
    '=0':'No tenemos clientes esperando.',
    '=1': 'Tenemos 1 cliente esperando.',
    'other':'Tenemos # clientes esperando'
  }
  cambiarPersona(){
    this.nombre = 'Melissa'
    this.genero = 'femenino'
  }
  borrarPersona(){
    this.clientes.pop()
  }
  //KeyValue pipe
  persona={
    nombre:'Fernando',
    edad: 35,
    direccion: 'Ottawa,Canadá'
  }
  //Json pipe
  heroe=[
    {
      nombre:'Superman',
      vuela: true
    },
    {
      nombre:'Robin',
      vuela: false
    },
    {
      nombre:'Aquaman',
      vuela: true
    }
  ]

  //Async Pipe

  miObservable= interval(1000)

  valorPromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data de promesa')
    },3500)

})
}
