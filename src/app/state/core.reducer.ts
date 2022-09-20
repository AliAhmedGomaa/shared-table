import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { State } from './core.state';
import * as UserReducer from './users/users.reducer';

export const reducers: ActionReducerMap<State> = {
    users: UserReducer.reducer
};

export const metaReducers: MetaReducer<State>[] = [];