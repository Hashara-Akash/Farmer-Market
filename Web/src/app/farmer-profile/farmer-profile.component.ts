import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-farmer-profile',
  templateUrl: './farmer-profile.component.html',
  styleUrls: ['./farmer-profile.component.css']
})
export class FarmerProfileComponent implements OnInit {

  constructor(private service:SharedService,private router: Router,    private route: ActivatedRoute) { }


  headers = ['Product','Qty','Price'];

  id = sessionStorage.getItem("farmerId");
  
  quantity:"";
  price:"";
  productName:""

  rows = []

  ngOnInit(): void {
    this.getfarmerProfileList();
    if(this.route.snapshot.queryParamMap.get('id'))
    this.id = this.route.snapshot.queryParamMap.get('id')
    console.log(this.route.snapshot.queryParamMap.get('id'));
  }

  getfarmerProfileList(){
    this.service.getfarmerProfileList(this.id).subscribe(data =>{
      console.log(JSON.stringify(data));
    //  this.rows = data;
      data.forEach(element => {
        this.rows.push({
          Product:element.ProductName,
          Qty:element.Quantity,
          Price:element.Price,
         
        });
      });

      
    })
    
    }


    clickFunction(){
      // ('" + id + @"','" + farmer.ProductName + @"','" + farmer.Price + @"','" + farmer.Quantity +@"')";

      let farmer = {ProductName : this.productName,Price:this.price,Quantity:this.quantity}
      console.log(farmer);
      this.service.farmerAddProducts(farmer,this.id).subscribe(data =>{
        console.log(JSON.stringify(data));
        this.rows = []
        this.getfarmerProfileList();
      //  this.rows = data;
      })
    }

}
