import { Component, OnInit } from '@angular/core';
import { BalanceService } from './balance.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
}) 
export class BalanceComponent implements OnInit {
  public details = '';
  
  constructor(private balanceService:BalanceService) {}
  

  ngOnInit(): void 
  {
    this.balanceService.GetBalance().subscribe((data:any) => 
    {
      console.log("transactions:",data);
      this.details = data;
    });
  }  
}
