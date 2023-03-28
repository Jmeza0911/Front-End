import { Action } from "../ngrx-fake/ngrx"

export function contadorReducer(state=10, action :Action){

    switch(action.type){
        case 'INCREMENTAR':
            return state+=1
        case 'DIVIDIR':
            return state/action.payload
        default:
            return state 
    }        
}