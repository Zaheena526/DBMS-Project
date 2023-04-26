import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Room } from '../service/room';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private productService:ProductService) { }

  

  ngOnInit(): void {
  }



  updateProduct(room:Room){

        this.productService.updateProduct(room);

     

  }






}
