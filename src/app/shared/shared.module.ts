import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { MainTableComponent } from './components/main-table/main-table.component';
import { MainFilterComponent } from './components/main-filter/main-filter.component';

@NgModule({
  declarations: [
    MainTableComponent,
    MainFilterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MainTableComponent,
    MainFilterComponent
  ]
})
export class SharedModule { }
