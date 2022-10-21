import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements OnInit {

  constructor(private service:SharedService) { }

  FarmerList:any=[];

  markers = [
    {lat:7.2906000000,lng: 80.6337000000,label: "A" ,icon:{},id:""}
  ];

  lat =7.2906000000;

  long = 80.6337000000;

  zoom=7;
  
  
//   markers = [

//     {

//         lat: 21.1594627,

//         lng: 72.6822083,

//         label: 'Surat'

//     },

//     {

//         lat: 23.0204978,

//         lng: 72.4396548,

//         label: 'Ahmedabad'

//     },

//     {

//         lat: 22.2736308,

//         lng: 70.7512555,

//         label: 'Rajkot'

//     }

// ];

  ngOnInit(): void {
    this.getFarmerList();
  }

  getFarmerList(){
    this.service.getLocationList().subscribe(data =>{
      console.log(JSON.stringify(data)+"asdadadasdsad");

      this.FarmerList = data;
      data.forEach(element => {
        this.markers.push({
          lat:element.Longitude,
          lng:element.Latitude,
          label:element.Username,
          icon: {
            url: element.QualityFlag
          },
          id:element.FarmerId
        });
      });
     
      console.log(this.markers);
    })
    
    }
   
  

}
