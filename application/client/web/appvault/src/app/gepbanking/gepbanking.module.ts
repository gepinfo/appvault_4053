import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GepBankingComponent } from './gepbanking.component';
import { NgxPlaidLinkModule } from 'ngx-plaid-link';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: GepBankingComponent,
  },
];

@NgModule({
  declarations: [GepBankingComponent],
  imports: [RouterModule.forChild(routes), CommonModule, HttpClientModule, NgxPlaidLinkModule],
})
export class GepbankingModule {}
