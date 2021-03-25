import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  
  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private router:Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"]);
      }else if(params["colorId"]){
        this.getCarsByColor(params["colorId"]);
      }else{
        this.getCars();
      }
    })
    
  }

  getCars() {
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data
    })
  }

  getCarsByBrand(id:number) {
    this.carService.getCarsByBrand(id).subscribe(response=>{
      this.cars = response.data
    })
  }

  getCarsByColor(id:number) {
    this.carService.getCarsByColor(id).subscribe(response=>{
      this.cars = response.data
    })
  }

  goToImage(carId:number){
    this.router.navigate(['./carimage',carId])
  }
}
