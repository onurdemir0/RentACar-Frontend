import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css'],
})
export class CarUpdateComponent implements OnInit {
  carUpdateForm: FormGroup;
  carDetail: Car;

  brands: Brand[];
  colors: Color[];

  constructor(
    private formBuilder: FormBuilder,
    private brandService: BrandService,
    private colorService: ColorService,
    private carService: CarService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.createCarUpdateForm();
    this.getBrands();
    this.getColors();
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetailsByCarId(params['carId']);
      }
    });
  }

  createCarUpdateForm() {
    this.carUpdateForm = this.formBuilder.group({
      brandName: ['', [Validators.required]],
      brandId: ['', [Validators.required]],
      colorId: ['', [Validators.required]],
      carModelYear: [0, [Validators.required]],
      carDailyPrice: [0, [Validators.required]],
      carDescription: ['', [Validators.required]],
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  updateCar() {
    if (this.carUpdateForm.valid) {
      let carModel = Object.assign({}, this.carUpdateForm.value);
      carModel.id = this.carDetail.carId;
      this.carService.update(carModel).subscribe(
        (response) => {
          this.toastrService.success(response.message);
        },
        (responseError) => {
          this.toastrService.success(responseError.message);
        }
      );
    } else {
      this.toastrService.error('L??tfen formda belirtilen alanlar?? doldurunuz', 'Dikkat');
    }
  }

  getCarDetailsByCarId(carId: number) {
    this.carService.getCarDetail(carId).subscribe((response) => {
      this.carDetail = response.data[0];
      this.carUpdateForm.setValue({
        brandName: this.carDetail.brandName,
        carModelYear: this.carDetail.modelYear,
        carDailyPrice: this.carDetail.dailyPrice,
        carDescription: this.carDetail.description,
      });
    });
  }
}