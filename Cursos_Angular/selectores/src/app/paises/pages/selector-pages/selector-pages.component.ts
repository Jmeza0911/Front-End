import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms'
import { PaisesService } from '../../services/paises.service';
import { PaisSmall } from '../../interfaces/paises.interfaces';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-pages',
  templateUrl: './selector-pages.component.html',
  styles: [
  ]
})
export class SelectorPagesComponent implements OnInit{

  miFormulario: FormGroup= this.fb.group({
    region:['',Validators.required],
    pais:['',Validators.required],
    frontera:[{value:'',disabled:true},Validators.required]
  })

  regiones : string[] = []
  paises: PaisSmall [] = []
  fronteras: string [] = []

  cargando: boolean =false
  
  ngOnInit(): void {
    this.regiones =this.PaisesService.regiones

    this.miFormulario.get('region')?.valueChanges
    .pipe(
      tap((_)=>{
        this.miFormulario.get('pais')?.reset('')
        this.cargando = true
        
      }),
      switchMap( region => this.PaisesService.getPaisesPorRegion(region))
    )
    .subscribe( paises =>{
      this.paises = paises
      this.cargando = false
    })

   

    this.miFormulario.get('pais')?.valueChanges
    .pipe(
      tap(()=>{
        this.miFormulario.get('frontera')?.reset('')
        this.cargando = true
      }),
      switchMap(codigo => this.PaisesService.getPaisPorCodigo(codigo))
    )
    .subscribe( pais =>{
     this.fronteras = pais?.borders || []
     this.cargando = false
    })

  }
  

  constructor(private fb :FormBuilder,
              private PaisesService: PaisesService){

  }

  guardar(){
    
  }
}
