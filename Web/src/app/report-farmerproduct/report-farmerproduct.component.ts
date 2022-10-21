import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';


@Component({
  selector: 'app-report-farmerproduct',
  templateUrl: './report-farmerproduct.component.html',
  styleUrls: ['./report-farmerproduct.component.css']
})
export class ReportFarmerproductComponent implements OnInit {

  constructor(private service:SharedService) { }


  headers = ['FarmerName','Product','Qty','Price'];

  id = "1";

  rows = []

  ngOnInit(): void {
    this.getReportDetails();

  }

  getReportDetails(){
    this.service.getFarmerProductReports().subscribe(data =>{
      console.log(JSON.stringify(data));
    //  this.rows = data;
      data.forEach(element => {
        this.rows.push({
          FarmerName:element.Username,
          Product:element.ProductName,
          Qty:element.Quantity,
          Price:element.Price,
         
        });
      });

      
    })
    

}
}
