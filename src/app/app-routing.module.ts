import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarImageComponent } from './components/car-image/car-image.component';
import { CarComponent } from './components/car/car.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:CarComponent},
  {path:"rentals", component:RentalComponent},
  {path:"cars", component:CarComponent},
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/color/:colorId", component:CarComponent},
  {path:"carimage/:carId", component:CarImageComponent},
  {path:"cars/detail/:carId",component:CarImageComponent},
  {path:"cars/filter/:brandId/:colorId", component:CarComponent},
  {path:"rentals/:carId", component:RentalComponent},
  {path:"payment/:rental", component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
