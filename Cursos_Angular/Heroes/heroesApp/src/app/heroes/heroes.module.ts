import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgregarComponent } from './Pages/agregar/agregar.component';
import { BuscarComponent } from './Pages/buscar/buscar.component';
import { HeroeComponent } from './Pages/heroe/heroe.component';
import { HomeComponent } from './Pages/home/home.component';
import { ListadoComponent } from './Pages/listado/listado.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule } from '@angular/material/card';
import {HeroesTarjetaComponent } from './components/heroes-tarjeta/heroes-tarjeta.component';
import {ImagenPipe } from './pipes/imagen.pipe';
import {MatGridListModule } from '@angular/material/grid-list';
import {MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';








@NgModule({
  declarations: [
  BuscarComponent,
  HeroeComponent,
  HomeComponent,
  ListadoComponent,
  HeroesTarjetaComponent,
  ImagenPipe,
  AgregarComponent,
  ConfirmarComponent
 
 
  ],
  
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    HeroesRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule,
  
  ]
})
export class HeroesModule { }
