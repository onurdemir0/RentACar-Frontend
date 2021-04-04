import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResponseModel } from '../models/baseResponseModel';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = 'http://localhost:5000/api/';

  constructor(private httpClient:HttpClient) { }

  getColors(): Observable<ListResponseModel<Color>>{
    let newPath = this.apiUrl + "colors/getall"
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }

  addColor(color:Color):Observable<BaseResponseModel>{
    let newPath = this.apiUrl + "colors/add";
    return this.httpClient.post<BaseResponseModel>(newPath,color);
  }

  updateColor(color:Color):Observable<BaseResponseModel>{
    let newPath = this.apiUrl + "colors/update";
    return this.httpClient.post<BaseResponseModel>(newPath,color)
  }

  deleteColor(color:Color):Observable<BaseResponseModel>{
    let newPath = this.apiUrl + "colors/delete";
    return this.httpClient.post<BaseResponseModel>(newPath,color)
  }
}
