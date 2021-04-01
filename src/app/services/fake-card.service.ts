import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResponseModel } from '../models/baseResponseModel';
import { FakeCard } from '../models/fakeCard';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class FakeCardService {

  apiUrl = 'http://localhost:5000/api/';

  constructor(private httpClient:HttpClient) { }

  isCardExist(fakeCard:FakeCard):Observable<BaseResponseModel>{
    let newPath = this.apiUrl + "fakecards/iscardexist";
    console.log(fakeCard);
    return this.httpClient.post<BaseResponseModel>(newPath,fakeCard);
  }

  getCardByNumber(cardNumber:string):Observable<ListResponseModel<FakeCard>>{
    let newPath = this.apiUrl + "fakecards/getbycardnumber?cardnumber=" + cardNumber;
    return this.httpClient.get<ListResponseModel<FakeCard>>(newPath);
  }

  updateCard(fakeCard:FakeCard){
    let newPath = this.apiUrl + "fakecards/update";
    this.httpClient.put(newPath, fakeCard);
  }
}
