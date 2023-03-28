import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

    miFormulario: FormGroup = this.fb.group({
      nombre:['',[Validators.required,Validators.minLength(3)]],
      favoritos:this.fb.array([
        ['Metal Gear',Validators.required],
        ['Death Strading',Validators.required],
      ],Validators.required)

  })

  nuevoFavorito: FormControl = this.fb.control('', Validators.required)

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray
  }

  constructor(private fb: FormBuilder){}


  campoValido(campo:string){
    return this.miFormulario.controls[campo].errors 
              && this.miFormulario.controls[campo].touched
  }
  agregarFavorito(){
    if (this.nuevoFavorito.invalid){return}

    this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required))

    this.nuevoFavorito.reset()
  
  }
  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched()
      return
    }
    this.miFormulario.reset()
  }

  eliminar(i:number){
    this.favoritosArr.removeAt(i)
  }
  
}
