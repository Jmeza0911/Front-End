import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent {
  
  miFormulario: FormGroup = this.fb.group({
    nombre:['',[Validators.required,Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email:['',[Validators.required, Validators.pattern(this.validatorService.emailPattern)],[this.emailValidator]],
    username:['',[Validators.required , this.validatorService.noPuedeSerUsario ]],
    password:['',[Validators.required , Validators.minLength(6) ]],
    password2:['',[Validators.required ]]
  },{
      Validators:[ this.validatorService.camposIguales('password','password2')]
  }
  )

  get emailErrorMsg(): string{

    const errors = this.miFormulario.get('email')?.errors

    if(errors?.['required']){
      return 'Email es obligatorio'
    }else if(errors?.['pattern']){
      return ' El valor ingresado no tiene formato de correo'
    }else if (errors?.['emailTomado']) {
      return 'El email ya fue tomado'
    }else{
      return ''
    }
    
  }

  constructor(private fb : FormBuilder,
              private validatorService : ValidatorService,
              private emailValidator: EmailValidatorService ){}

  ngOnInit(): void {
    
    this.miFormulario.reset({
      nombre:'Nombre completo',
      email:'correo@email.com'
    })
  }


  campoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid 
      && this.miFormulario.get(campo)?.touched
  }

  submitFormulario(){
    this.miFormulario.markAllAsTouched()
  }
}

