import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  
  // miFormulario: FormGroup = new FormGroup({

  //   nombre: new FormControl('Rtx'),
  //   precio: new FormControl(1500),
  //   existencias: new FormControl(0)

  miFormulario: FormGroup = this.fb.group({
    nombre:['',[Validators.required,Validators.minLength(3)]]
  })

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'RTX',
      precio: 1600,
      existencias:50
    })
  }

  campoValido(campo:string){
    return this.miFormulario.controls[campo].errors 
              && this.miFormulario.controls[campo].touched
  }
  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched()
      return
    }
    this.miFormulario.reset()
  }
}
