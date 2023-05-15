import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class GepbankingService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    LinkCreate(reqbody:any): Observable<any> 
    {
 	 	return this.http.post(this.sharedService.WEB_API + `/link/token/create?connectType=plaid`,reqbody);
    }

    AccessCreate(reqbody:any): Observable<any> 
    {
 	 	return this.http.post(this.sharedService.WEB_API + `/item/public_token/exchange?connectType=plaid`,reqbody);
    }

}