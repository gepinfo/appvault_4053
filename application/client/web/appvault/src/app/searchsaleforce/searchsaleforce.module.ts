import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchsaleforceComponent } from './searchsaleforce.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgSelectModule,
        FormsModule, ReactiveFormsModule,
        RouterModule.forChild([
            { path: '', component: SearchsaleforceComponent },
        ]),
        AgGridModule
    ],
    declarations: [
        SearchsaleforceComponent,
    ]
})
export class SearchsaleforceModule { }