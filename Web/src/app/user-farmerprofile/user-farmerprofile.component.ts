import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-farmerprofile',
  templateUrl: './user-farmerprofile.component.html',
  styleUrls: ['./user-farmerprofile.component.css']
})
export class UserFarmerprofileComponent implements OnInit {
 
  constructor(private service:SharedService, private router: Router,    private route: ActivatedRoute) { 
   
  }

  headers = ['Product','Qty','Price'];
  id = "";
  user={};
  rows = []
  selectedLevel;
  qualityFlagType = [
    {
      "icon":"http://maps.google.com/mapfiles/ms/icons/green-dot.png",
      "name":"Excellent"
    },
    {
      "icon":"http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
      "name":"Very Bad"
    },
  ]

  ngOnInit(): void {
    if(this.route.snapshot.queryParamMap.get('id'))
    this.id = this.route.snapshot.queryParamMap.get('id')
    console.log(this.route.snapshot.queryParamMap.get('id')); // e.g. in URI ?param1=blah

    this.getfarmerProfileList();
   
  }
 

  getfarmerProfileList(){
    this.service.getfarmerProfileList(this.id).subscribe(data =>{
      data.forEach(element => {
        this.rows.push({
          Product:element.ProductName,
          Qty:element.Quantity,
          Price:element.Price,
         
        });
      });
    })
  }

  clickFunction() {

    //alert("clicked me!");
    console.log(this.selectedLevel)
    this.user={FarmerId : this.id, QualityFlag:this.selectedLevel}
    this.service.userUpdateFarmerQuality(this.user).subscribe(data =>{
      console.log(data)
        alert("Status updated!");
    })

  }

}
