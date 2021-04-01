import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = 'http://localhost:5000/api/';

  constructor(private httpClient:HttpClient) { }

  getRentals(): Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl + 'rentals/getallrent';
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  addRental(rental: Rental) {
    let newPath = this.apiUrl + 'rentals/add';
    this.httpClient.post(newPath, rental).subscribe();
  }
}
