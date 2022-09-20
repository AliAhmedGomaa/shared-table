import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IUser } from '../../models/user.model';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss']
})
export class MainTableComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild(MatSort) sort!: MatSort;

  @Input() displayedColumns!: any[];
  @Input() columnsHeaders!: any[];
  @Input() entity!: string;

  dataSource = new MatTableDataSource<IUser[]>([]);
  subscriptions: Subscription[] = [];

  constructor(private store: Store) { }

  ngOnInit(): void {
    const subscription = this.store.select((state: any) => state[this.entity]).subscribe((entity: any) => {
      this.dataSource.data = entity.data
    })

    this.subscriptions.push(subscription);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sb => {
      if (sb instanceof Subscription) {
        sb.unsubscribe();
      }
    });
  }
}
