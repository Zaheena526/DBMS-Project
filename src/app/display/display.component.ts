import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Room } from '../service/room';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private service:ProductService) { 
    
  }

  ngOnInit(): void {
    
    this.getAllroom();

  }

  roomList:Room[]= [];

  getAllroom(){


          this.service.getAllroom().subscribe(rooms => this.roomList = rooms );

            console.log(this.roomList);

  }



}
