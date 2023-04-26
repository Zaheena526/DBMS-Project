import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FoodInfo } from './Food_Info';

@Injectable({
  providedIn: 'root'
})
export class FoodInfoService {


    url:string = "http://localhost:9191/hms" ;


  constructor(private http:HttpClient) { }

    
    addProduct(foodinfo:FoodInfo){



        this.http.post<FoodInfo>(this.url+"/addfooditem",foodinfo)
        .subscribe(foodinfo => alert("Food details added successfully :"+foodinfo.id) );

        console.log(this.addProduct);
    }


    updateProduct(foodinfo:FoodInfo){
        let updateRoom:FoodInfo;

        this.http.put<FoodInfo>(this.url+"/updatefooditem",foodinfo)
        .subscribe(FoodInfo => alert("Food details updated successfully :"+foodinfo.id));

    }




      deleteProduct(foodinfo:FoodInfo){

           if(confirm("Are you sure you want to delete the Food details"))
            this.http.delete(this.url+"/deleteFoodItem/"+foodinfo.id).subscribe(foodinfo => alert("Food details deleted successfully"));
            console.log("Food details deleted successfully")



      }




        getAllFoodItems():Observable<any>{

         return   this.http.get(this.url+"/fooditems");

        }









}



