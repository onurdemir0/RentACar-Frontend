export interface Rental{
    rentalId?:number;
    carId:number;
    brandName:string;
    colorName:string;
    firstName?:string;
    lastName?:string;
    companyName?:string;
    carModelYear:string;
    carDailyPrice:number;
    carDescription:string;
    rentDate:Date;
    returnDate:Date;
    customerId?:number;
}