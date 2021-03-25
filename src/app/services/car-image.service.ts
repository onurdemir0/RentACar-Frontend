import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl = 'http://localhost:5000/api/carimages/getimagesbycarid?id=';

  constructor(private httpClient:HttpClient) { }

  getImageByCarId(id:number):Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + id;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}
