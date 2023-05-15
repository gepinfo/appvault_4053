import { Component, OnInit } from '@angular/core';
import { SearchsaleforceService } from './searchsaleforce.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchsaleforce',
  templateUrl: './searchsaleforce.component.html',
  styleUrls: ['./searchsaleforce.component.scss'],
})

export class SearchsaleforceComponent implements OnInit {
    // columnDefs: any = [{ headerName: 'name', field: 'name'  },{ headerName: 'description', field: 'description'  },{ headerName: 'callername', field: 'callername'  },{ headerName: 'types', field: 'types'  },{ headerName: 'severity', field: 'severity'  },];
    gridApi: any;
    gridColumnApi: any;
    rowSelection = 'single';
    defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
    public testapp:any = {
        created_date_at: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date_at: '',
        name: '',
        test: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];
    typesitemArray: any = [];
    public columnDefs = [
    ];
    public gridOptions = {

        defaultColDef: {
            sortable: true,
            filter: 'agTextColumnFilter',
            resizable: true
        },

        columnDefs: this.columnDefs,
        enableSorting: true,
        enableFilter: true,
        pagination: true
    };


    public ObjectAccount = 'Account';

    constructor (
        private searchsaleforceService: SearchsaleforceService,
        private router: Router,
    ) { }
        
    ngOnInit() {
        this.testapp.created_by = sessionStorage.getItem('email') || ''; 
        this.GpGetAllValues();
    }

    GpRoute(queryObject:any) {
        this.router.navigate(['./updatesales'], { queryParams:  queryObject})
    }
    onSelectionChanged(event:any) {
        const selectedRows = this.gridApi.getSelectedRows();
        console.log(selectedRows)
        let queryObject = {
            Id: selectedRows[0].Id,
            featurename: selectedRows[0].attributes.type
        }
 	 	this.GpRoute(queryObject);
    }
    onGridReady(params:any) {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
        console.log(params)
    }
    GpGetAllValues() {
        this.searchsaleforceService.GpGetAllValues(this.ObjectAccount).subscribe((data:any) => {
 	 	    console.log(data);
            this.dynamicallyConfigureColumnsFromObject(data.recentItems[0])
            this.gridApi.setRowData(data.recentItems);
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpSearch() {
        this.searchsaleforceService.GpSearch(this.testapp).subscribe((data:any) => {
            this.rowData = data;
 	 	console.log(data);
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }

    dynamicallyConfigureColumnsFromObject(anObject:any){
        const colDefs = this.gridApi.getColumnDefs();
        colDefs.length=0;
        const keys = Object.keys(anObject)
        keys.forEach(key => { if(key != 'attributes') colDefs.push({field : key}) });
        this.gridApi.setColumnDefs(colDefs);
    }
}