import { User } from './shared/models/user.model';
import { Component, OnInit } from '@angular/core';
import { UsersService } from './shared/services/users.service';
import { convertClassToColumnsNames } from './shared/utils/convertClassToColumnsNames';
import { generateColumnsHeaders } from './shared/utils/generateColumnsHeaders';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shared-table';

  columns = convertClassToColumnsNames(User);
  columnsHeaders = generateColumnsHeaders(this.columns);

  // example for custom column headers
  // [
  //   { label: '#', value: 'id'  },
  //   { label: 'My New Name ', value: 'name' },
  // ]


  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.fetchUsers()
  }
}
