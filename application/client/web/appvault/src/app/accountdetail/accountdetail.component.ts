import { Component, OnInit } from '@angular/core';
import { AccountdetailService } from './accountdetail.service';


@Component({
  selector: 'app-accountdetail',
  templateUrl: './accountdetail.component.html',
  styleUrls: ['./accountdetail.component.scss'],
})

export class AccountdetailComponent implements OnInit {
    public salesforceapi:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        salesforcelist: '',
    }

    constructor (
        private accountdetailService: AccountdetailService,
    ) { }

    ngOnInit() {
        this.salesforceapi.created_by = sessionStorage.getItem('email') || ''; 
        
        
    
    }
}