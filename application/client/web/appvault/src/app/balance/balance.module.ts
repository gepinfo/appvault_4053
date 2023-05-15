import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BalanceComponent } from './balance.component';
import { NgxPlaidLinkModule } from 'ngx-plaid-link';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: BalanceComponent,
  },
];

@NgModule({
  declarations: [BalanceComponent],
  imports: [RouterModule.forChild(routes), CommonModule, HttpClientModule, NgxPlaidLinkModule],
})
export class BalanceModule {}
