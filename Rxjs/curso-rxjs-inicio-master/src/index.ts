import { Observable } from "rxjs";


console.log('Hola Mundo!');

const obs$ = new Observable(subs =>{
    
    subs.next('hola')
    subs.next('mundo')
})

obs$.subscribe(resp => console.log)







