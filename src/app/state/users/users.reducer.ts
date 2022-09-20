import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from './users.actions';
import { initialState, UserState } from './users.state';

const userReducer = createReducer(
    initialState,
    on(UserActions.fetchUsers, (state, { data }) =>{
        console.log('users');
        console.log(data);
        
        
        return({
    
        
        ...state,
        data
    })}),
);

export function reducer(state: UserState | undefined, action: Action): any {
    return userReducer(state, action);
}