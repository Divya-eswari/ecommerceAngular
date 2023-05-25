import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products:any=[] 
  public grandTotal:number=0;

  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
    //here I am calling getProducts function from cart.service which gives list of items added in the cart
    //calling in ngOnInit as it gets list when component is initialized
    this.cartservice.getProducts()
    .subscribe(res=>{
      this.products=res;                                   
      this.grandTotal = this.cartservice.getTotalPrice();
    })

  }


  removeItem(item:any){
    //calling removeCartItem function from cart.service which removes items from cart
    this.cartservice.removeCartItem(item);
  }

  emptycart(){
    //calling removeAllCart function from cart.service which empties cart
    this.cartservice.removeAllCart();
  }


}
