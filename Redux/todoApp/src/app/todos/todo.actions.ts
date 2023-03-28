import {createAction} from '@ngrx/store';
import { props } from '@ngrx/store';



export const crear = createAction(
            '[TODO] Create to do',
             props<{texto:string}>())

export const toggle = createAction(
            '[TODO] Toggle to do',
             props<{id:number}>())

export const editar = createAction(
            '[TODO] Editar to do',
             props<{id:number, texto:string}>())

export const borrar = createAction(
            '[TODO] Borrar to do',
             props<{id:number}>())

export const toggleAll = createAction(
            '[TODO] Toggle All to do',
             props<{completado:boolean}>())