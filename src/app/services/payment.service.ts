import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseResponseModel } from '../models/baseResponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  apiUrl = 'http://localhost:5000/api/';

  constructor(private httpClient:HttpClient) { }

  pay(rental:Rental,amount:number){
    let path = this.apiUrl + "rentals/paymentadd";
    //rental.returnDate = undefined;
    this.httpClient.post<BaseResponseModel>(path,{payment:{amount:amount},rental:rental})
  }
}
