import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/shared/models/user.model';

export const fetchUsers = createAction(
    '[Main Table] Fetch Users',
    props<{ data: IUser[] }>()
);



