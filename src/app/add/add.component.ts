import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Room } from '../service/room';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

    room!: Room;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

  addProduct(room:Room){

     this.productService.addProduct(room);


  }



}
