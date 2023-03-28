import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarComponent } from './Pages/agregar/agregar.component';
import { BuscarComponent } from './Pages/buscar/buscar.component';
import { HeroeComponent } from './Pages/heroe/heroe.component';
import { ListadoComponent } from './Pages/listado/listado.component';
import { HomeComponent } from './Pages/home/home.component';

const rutas: Routes =[
  {
    path:'',
    component:HomeComponent,
    children:[
      {path: 'listado' ,component: ListadoComponent},
      {path: 'agregar' ,component: AgregarComponent},
      {path: 'editar/:id', component: AgregarComponent},
      {path: 'buscar', component: BuscarComponent},
      {path: ':id', component: HeroeComponent},
      {path: '**', redirectTo: 'listado'}
    ]

  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(rutas)
  ],
  exports:[
    RouterModule
  ]
})
export class HeroesRoutingModule { }
