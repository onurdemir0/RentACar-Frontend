import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {

  brandAddForm: FormGroup;

  constructor(
    private brandService: BrandService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.addCreateForm();
  }

  addCreateForm() {
    this.brandAddForm = this.formBuilder.group({
      brandName: ['', Validators.required],
    });
  }

  addBrand() {
    if (this.brandAddForm.valid) {
      let addBrandModel = Object.assign({}, this.brandAddForm.value);
      this.brandService.addBrand(addBrandModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        },
        (responseError) => {
          if (responseError.error.ValidationErrors.length > 0) {
            for (
              let i = 0;
              i < responseError.error.ValidationErrors.length;
              i++
            ) {
              this.toastrService.error(
                responseError.error.ValidationErrors[i].ErrorMessage,
                'Doğrulama Hatası'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.warning(
        'Marka ismi boş olamaz',
        'Ekleme Başarısız');
    }
  }

}
