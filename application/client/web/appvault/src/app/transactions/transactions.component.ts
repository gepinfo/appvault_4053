import { Component, OnInit } from '@angular/core';
import { TransactionsService } from './transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
}) 
export class TransactionsComponent implements OnInit {
  public details = '';
  
  constructor(private transactionsService:TransactionsService) {}
  

  ngOnInit(): void 
  {
    let reqbody =
    {
      "start_date" : "2021-01-01",
      "end_date" : "2021-12-10"
    };
    this.transactionsService.GetTransactions(reqbody).subscribe((data:any) => 
    {
      console.log("transactions:",data);
      this.details = data;
    });
  }  
}
