import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class UpdatesalesService {

  constructor(
    private http: HttpClient,
    private sharedService: SharedService

  ) { }

  GpUpdate(salesobject: any): Observable<any> {
    let jwt_token = sessionStorage.getItem('JwtToken');
    return this.http.put(this.sharedService.WEB_API + `/salesforceapi/get/update` + `?jwt_token=${jwt_token}`, salesobject);
  }
  GpDelete(salesdelete: any): Observable<any> {
    let jwt_token = sessionStorage.getItem('JwtToken');
    return this.http.delete(this.sharedService.WEB_API + `/salesforceapi/${salesdelete.Id}` + `?featurename=${salesdelete.featurename}&jwt_token=${jwt_token}`);
  }
  GpGetById(salesObject: any): Observable<any> {
    let jwt_token = sessionStorage.getItem('JwtToken');
    return this.http.get(this.sharedService.WEB_API + `/salesforceapi/${salesObject.Id}` + `?featurename=${salesObject.featurename}&jwt_token=${jwt_token}`);
  }
  accountGpGetAllValues(saleforcetabs: any): Observable<any> {
    let jwt_token = sessionStorage.getItem('JwtToken');
    return this.http.get(this.sharedService.WEB_API + `/salesforceapi/get/search` + `?featurename=${saleforcetabs}&jwt_token=${jwt_token}`);
  }
}
