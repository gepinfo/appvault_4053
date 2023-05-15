import { Component, OnInit } from '@angular/core';
import {
  PlaidOnEventArgs,
  PlaidOnExitArgs,
  PlaidOnSuccessArgs,
} from 'ngx-plaid-link';
import { GepbankingService } from './gepbanking.service';

@Component({
  selector: 'app-gepbanking',
  templateUrl: './gepbanking.component.html',
  styleUrls: ['./gepbanking.component.scss'],
})
export class GepBankingComponent implements OnInit {
  public tokenFetched: boolean = false;
  // Fetch this from your backend.
  public linkToken = '';
  constructor(private gepbankingService:GepbankingService) {}

  ngOnInit(): void 
  {
    let reqbody =
    {
      "client_name": "Insert Client name here",
      "country_codes": ["US"],
      "language": "en",
      "user": {
        "client_user_id": "unique_user_id"
      },
        "products": ["auth"]
    };
    this.gepbankingService.LinkCreate(reqbody).subscribe((data:any) => 
    {
      this.linkToken = data.link_token;
      this.tokenFetched = true;
    });
  }

  onSuccess(event: PlaidOnSuccessArgs) 
  {
    console.log({ success: event });
    this.gepbankingService.AccessCreate(event.token).subscribe((data:any) => 
    {
      console.log("accessdata:",data);
    });
  }

  onEvent(event: PlaidOnEventArgs) {
    console.log({ event });
  }

  onExit(event: PlaidOnExitArgs) {
    console.log({ error: event });
  }

  onLoad(event: any) {
    console.log({ load: event });
  }

  onClick(event: any) {
    console.log({ click: event });
  }
}
