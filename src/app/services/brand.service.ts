import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResponseModel } from '../models/baseResponseModel';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = 'http://localhost:5000/api/';

  constructor(private httpClient:HttpClient) { }

  getBrands(): Observable<ListResponseModel<Brand>> {
    let newPath = this.apiUrl + "brands/getall"
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }

  addBrand(brand:Brand):Observable<BaseResponseModel>{
    let newPath = this.apiUrl + "brands/add";
    return this.httpClient.post<BaseResponseModel>(newPath,brand);
  }

  updateBrand(brand:Brand):Observable<BaseResponseModel>{
    let newPath = this.apiUrl + "brands/update";
    return this.httpClient.post<BaseResponseModel>(newPath,brand)
  }

  deleteBrand(brand:Brand):Observable<BaseResponseModel>{
    let newPath = this.apiUrl + "brands/delete";
    return this.httpClient.post<BaseResponseModel>(newPath,brand)
  }
}
