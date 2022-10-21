import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { ShowGooglemapComponent } from './googlemap/show-googlemap/show-googlemap.component';
import { AddEditGooglemapComponent } from './googlemap/add-edit-googlemap/add-edit-googlemap.component';
import {SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { FarmerLoginComponent } from './farmer-login/farmer-login.component';
import { FarmerRegisterComponent } from './farmer-register/farmer-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { WebmasterDashboardComponent } from './webmaster-dashboard/webmaster-dashboard.component';
import { FarmerProfileComponent } from './farmer-profile/farmer-profile.component';
import { PublicViewmapComponent } from './public-viewmap/public-viewmap.component'; 
import { UserFarmerprofileComponent } from './user-farmerprofile/user-farmerprofile.component';
import { ReportFarmerproductComponent } from './report-farmerproduct/report-farmerproduct.component'; 
import { HeaderComponent } from './components/header/header.component';
import { WebmasterLoginComponent } from './webmaster-login/webmaster-login.component'; 


@NgModule({
  declarations: [
    AppComponent,
    GooglemapComponent,
    ShowGooglemapComponent,
    AddEditGooglemapComponent,
    FarmerLoginComponent,
    FarmerRegisterComponent,
    UserLoginComponent,
    WebmasterDashboardComponent,
    FarmerProfileComponent,
    PublicViewmapComponent,
    UserFarmerprofileComponent,
    ReportFarmerproductComponent,
    HeaderComponent,
    WebmasterLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({ 
      apiKey:"AIzaSyDVamh7-n7dttovSZq4X2asx-IHA64oyX0"
    }) 
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
