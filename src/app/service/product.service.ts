import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from './room';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


    url:string = "http://localhost:9191/hms" ;


  constructor(private http:HttpClient) { }

    
    addProduct(room:Room){



        this.http.post<Room>(this.url+"/add",room)
        .subscribe(room => alert("Room details added successfully :"+room.rno) );

        console.log(this.addProduct);
    }


    updateProduct(room:Room){
        let updateRoom:Room;

        this.http.put<Room>(this.url+"/update",room)
        .subscribe(room => alert("Room details updated successfully :"+room.rno));

    }




      deleteProduct(room:Room){

           if(confirm("Are you sure you want to delete the room details"))
            this.http.delete(this.url+"/delete/"+room.rno).subscribe(room => alert("Room details deleted successfully"));
            console.log("Room details deleted successfully")



      }




        getAllroom():Observable<any>{

         return   this.http.get(this.url+"/rooms");

        }









}



