import {createReducer,on} from '@ngrx/store';
import { setFiltro,filtrosValidos}  from './fltro.actions';

export const initialState : filtrosValidos = 'completados'

const _filtroReducer = createReducer(initialState,
    on(setFiltro, (state, {filtro}) => filtro))

export function filtroReducer(state:any,action:any){
    return _filtroReducer(state,action)
} 

