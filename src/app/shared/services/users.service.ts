import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchUsers } from 'src/app/state/users';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: IUser[] = [
    {
      id: 1,
      first_name: 'Ali',
      last_name: 'Gomaa',
      gender: 'Male',
      email: 'aly@email.com',
      age: 26,
      phone_number: '01227126394',
      adddress: 'Alexanderia',
      job: 'developer',
    },
    {
      id: 2,
      first_name: 'Ahmed',
      last_name: 'Ali',
      gender: 'Male',
      email: 'ahmed@email.com',
      age: 22,
      phone_number: '01227126395',
      adddress: 'Alexanderia',
      job: 'developer',
    },
  ];

  constructor(private store: Store<IUser>) { }
  
  fetchUsers(): void {
    this.store.dispatch(fetchUsers({ data: this.users }))
  }
}
