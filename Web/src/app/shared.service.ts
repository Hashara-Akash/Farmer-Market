import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://localhost:49710/api";

  constructor(private http:HttpClient) { }

  // //getLists

  getLocationList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/farmer');
  }

  getfarmerProfileList(id:string):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+`/farmerProfile/${id}`);
  }

  farmerRegistration(farmer:any):Observable<any[]>{
    return this.http.post<any>(this.APIUrl+`/farmer`,farmer);
  }

  farmerLogin(farmer:any):Observable<any[]>{
    return this.http.post<any>(this.APIUrl+`/farmerLogin`,farmer);
  }

  
  farmerAddProducts(farmer:any,id:string):Observable<any[]>{
    return this.http.post<any>(this.APIUrl+`/farmer/${id}`,farmer);
  }

  userLogin(user:any):Observable<any[]>{
    return this.http.post<any>(this.APIUrl+`/user`,user);
  }

  userCreation(user:any):Observable<any[]>{
    return this.http.post<any>(this.APIUrl+`/webMaster`,user);
  }

  userUpdateFarmerQuality(farmer:any):Observable<any[]>{
    return this.http.post<any>(this.APIUrl+`/farmerProfile`,farmer);
  }


 //report getAll()

 getFarmerProductReports():Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/report');
}


}
