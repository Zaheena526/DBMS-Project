import { Component, OnInit } from '@angular/core';
import { FoodInfoService } from '../Foodservice/FoodInfo.service';
import { FoodInfo } from '../Foodservice/Food_Info';


@Component({
  selector: 'app-display',
  templateUrl: './FoodDisplay.component.html',
  styleUrls: ['./FoodDisplay.component.css']
})
export class FoodDisplayComponent implements OnInit {

  constructor(private service:FoodInfoService) { 
    
  }

  ngOnInit(): void {
    
    this.getAllFoodItems();

  }

  foodList:FoodInfo[]= [];

  getAllFoodItems(){


          this.service.getAllFoodItems().subscribe(food=> this.foodList = food );

            console.log(this.foodList);

  }



}
