import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class BalanceService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GetBalance(): Observable<any> 
    {
 	 	return this.http.post(this.sharedService.WEB_API + `/accounts/balance/get?connectType=plaid`,'');
    }

}