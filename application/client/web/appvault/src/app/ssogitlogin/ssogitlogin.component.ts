import { Component, OnInit } from '@angular/core';
import { SsogitloginService } from './ssogitlogin.service';


@Component({
  selector: 'app-ssogitlogin',
  templateUrl: './ssogitlogin.component.html',
  styleUrls: ['./ssogitlogin.component.scss'],
})

export class SsogitloginComponent implements OnInit {
    public ssogithub:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        username: '',
    }

    constructor (
        private ssogitloginService: SsogitloginService,
    ) { }

    ngOnInit() {
        this.ssogithub.created_by = sessionStorage.getItem('email') || ''; 
        
        
    
    }
}