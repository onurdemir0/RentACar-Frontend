import { CarImage } from "./carImage";

export interface Car{
    carId:number;
    brandName:string;
    colorName:string; 
    dailyPrice:number;
    imagePath:string;
    description:string;
    modelYear:string;
    carImages:CarImage[];
}