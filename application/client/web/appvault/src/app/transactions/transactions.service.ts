import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class TransactionsService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GetTransactions(reqbody:any): Observable<any> 
    {
 	 	return this.http.post(this.sharedService.WEB_API + `/transactions/get?connectType=plaid`,reqbody);
    }

}