import { Component, OnInit } from '@angular/core';
import { CreatesalesService } from './createsales.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createsales',
  templateUrl: './createsales.component.html',
  styleUrls: ['./createsales.component.scss'],
})

export class CreatesalesComponent implements OnInit {
    public salesAccount:any = {
        Name: '' ,
        Type: '' , 
        featureName: 'Account'
    }
    public listofservices:any[] = ['Account', 'Contact', 'Opportunitie', 'Case', 'Report', 'Dashboard']
    public itemlist:any;
    public tabs:any = 'Account';
    public listIdConnectService:any;

    public type:any = ['Prospect', 'Customer - Direct', 'Customer - Channel', 'Channel Partner / Reseller', 'Installation Partner', 'Technology Partner', 'Other'];
    industry:any = [
        'Agriculture',
        'Apparel',
        'Banking',
        'Biotechnology',
        'Chemicals',
        'Communications',
        'Construction',
        'Consulting',
        'Education',
        'Electronics',
        'Energy',
        'Engineering',
        'Entertaiment',
        'Environmental',
        'Food & Beverage',
        'Government',
        'Healthcare',
        'Hospitality',
        'Insurance',
        'Recreation',
        'Retail',
        'Shipping',
        'Technology',
        'Telecommunications',
        'Transporation',
        'Utilites',
        'Other'
    ];
    ownership:any = ['Public', 'Private', 'Subsidiary', 'Other'];
    public rating:any = ['Hot', 'Cold', 'Warm'];
    public customerpriority:any = ['High', 'Low', 'Medium'];
    active:any = ['Yes', 'No'];
    sla:any = ['Gold', 'Silver', 'Platinum', 'Bronze'];
    upsellopportunity:any = ['Maybe', 'Yes', 'No'];

    constructor (
        private createsalesService: CreatesalesService,
        private router: Router
    ) { }

    ngOnInit() {
        this.salesAccount.created_by = sessionStorage.getItem('email') || ''; 
        this.AccountGpGetAllValues();
    }
    GpCreate() {
        console.log(this.salesAccount)
        if(this.salesAccount.Name !== '' || null || undefined){
            this.createsalesService.GpCreate(this.salesAccount).subscribe((data:any) => {
                this.salesAccount = {
                    Name: '' ,
                    Type: '' , 
                    featureName: 'Account'
                }
                this.router.navigate(['./searchsaleforce']);
            },
            (error:Error) => {
                console.log('Error', error);
            });
        }
    }
    onChange(){
        console.log(this.tabs);
        this.AccountGpGetAllValues();
    }
    AccountGpGetAllValues() {
        this.createsalesService.accountGpGetAllValues(this.tabs).subscribe((data:any) => {
            console.log(data.recentItems);
 	 	    this.itemlist = data.recentItems;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }

    onOptionsSelected() {
        this.salesAccount.ParentId = this.listIdConnectService.Id;  
    }
  
}