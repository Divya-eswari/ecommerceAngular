import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productList:any
  constructor(private api:ApiService,private cartservice:CartService) { }

  ngOnInit(): void {
    //here we are calling getProduct function from api.service and 
    //storing the list in productList Variable
    //we are calling this in ngOnInit in order to get list when component is initialized
    this.api.getProduct()
      .subscribe(res=>{
      this.productList = res;
      this.productList.forEach((a:any) =>{ 
        //quantity and price are not by defualt in api, so we are adding it manually
        Object.assign(a,{quantity:1,total:a.price});
      })   
    });
  } 

  
  addtoCart(item:any){
    //this function will call addtoCart function in cart.service
  this.cartservice.addtoCart(item);  //addtocart(item) comes from service of cart service


}



}
