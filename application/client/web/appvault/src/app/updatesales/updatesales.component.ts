import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UpdatesalesService } from './updatesales.service';

@Component({
  selector: 'app-updatesales',
  templateUrl: './updatesales.component.html',
  styleUrls: ['./updatesales.component.scss']
})
export class UpdatesalesComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private updatesalesservice: UpdatesalesService
  ) { }

  public salesAccountUpdate:any = {
    Name: ''
  }
  public staticsalesobject:any;

  public tabs:any = 'Account';
  public itemlist:any;
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
  public paramsObject:any;

  ngOnInit(): void {
    // this.AccountGpGetAllValues();
    this.activatedRoute.queryParams.subscribe((params:any) => {
      console.log(params);
      this.paramsObject = params;
      this.GpGetById();
      this.AccountGpGetAllValues();
    });
  }

  GpUpdate() {
    console.log(this.salesAccountUpdate);     
    this.salesAccountUpdate['featureName'] = 'Account';
    // console.log(this.filter(this.staticsalesobject, this.salesAccountUpdate));
    if(this.salesAccountUpdate.Name !== '' || null || undefined){
        this.updatesalesservice.GpUpdate(this.salesAccountUpdate).subscribe((data:any) => {
            this.salesAccountUpdate = '';
            this.router.navigate(['./searchsaleforce']);
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
  }

  GpDelete() {
    console.log(this.salesAccountUpdate);
    alert('Are you sure to delete')
    if(this.paramsObject !== null){
      console.log(this.paramsObject);
        this.updatesalesservice.GpDelete(this.paramsObject).subscribe((data:any) => {
            this.salesAccountUpdate = '';
            this.router.navigate(['./searchsaleforce']);
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
  }

  GpGetById() {
    this.updatesalesservice.GpGetById(this.paramsObject).subscribe((data:any)=>{
      delete data.LastModifiedDate; delete data.JigsawCompanyId;
      delete data.CreatedById;delete data.PhotoUrl;delete data.MasterRecordId;
      delete data.IsDeleted;delete data.LastViewedDate;delete data.CreatedDate;
      delete data.LastReferencedDate;delete data.BillingAddress;delete data.SystemModstamp;
      delete data.ShippingAddress;delete data.LastActivityDate;delete data.LastModifiedById;
      this.staticsalesobject = data;
      this.salesAccountUpdate = data;
    })
  }
  
  filter(obj1:any, obj2:any) {
    let result:any = {};
    for(let key in obj1) {
        if(obj2[key] != obj1[key]) result[key] = obj2[key];
        if(Array.isArray(typeof obj2[key]) && Array.isArray(typeof obj1[key])) 
            result[key] = arguments.callee(obj1[key], obj2[key]);
        if(typeof obj2[key] == 'object' && typeof obj1[key] == 'object') 
            result[key] = arguments.callee(obj1[key], obj2[key]);
    }
    return result;
  }

  AccountGpGetAllValues() {
    this.updatesalesservice.accountGpGetAllValues(this.tabs).subscribe((data:any) => {
        console.log(data.recentItems);
      this.itemlist = data.recentItems;
    },
    (error:Error) => {
        console.log('Error', error);
    });
  }

}
