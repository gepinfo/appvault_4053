import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatesalesComponent } from './updatesales.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    UpdatesalesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: UpdatesalesComponent },
    ]),
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule
  ]
})
export class UpdatesalesModule { }
