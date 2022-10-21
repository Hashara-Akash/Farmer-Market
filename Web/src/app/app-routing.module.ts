import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebMasterAuthGuard } from './webmaster-auth.guard';
import { UserAuthGuard } from './user-auth.guard';
import { FarmerAuthGuard } from './farmer-auth.guard';

import {FarmerLoginComponent} from './farmer-login/farmer-login.component';
import {FarmerRegisterComponent} from './farmer-register/farmer-register.component';
import {FarmerProfileComponent} from './farmer-profile/farmer-profile.component';

import {UserLoginComponent} from './user-login/user-login.component';
import {PublicViewmapComponent} from './public-viewmap/public-viewmap.component';
import {UserFarmerprofileComponent } from './user-farmerprofile/user-farmerprofile.component'; 
import {ReportFarmerproductComponent } from './report-farmerproduct/report-farmerproduct.component'; 

import {WebmasterDashboardComponent} from './webmaster-dashboard/webmaster-dashboard.component';
import {WebmasterLoginComponent} from './webmaster-login/webmaster-login.component';

import {GooglemapComponent} from './googlemap/googlemap.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'public-view'},

  { path: 'farmer-login', component: FarmerLoginComponent },
  { path: 'farmer-register', component: FarmerRegisterComponent},
  { path: 'farmer-profile', component: FarmerProfileComponent, canActivate: [FarmerAuthGuard]},
  { path: 'public-view', component: PublicViewmapComponent},

  { path: 'report-farmerproduct', component: ReportFarmerproductComponent},
  
  { path: 'user-login', component: UserLoginComponent },
  { path: 'user-farmerprofile', component: UserFarmerprofileComponent, canActivate: [UserAuthGuard] },
  //{ path: 'user-farmerprofile', component: UserFarmerprofileComponent },

  { path: 'webmaster-dashboard', component: WebmasterDashboardComponent, canActivate: [WebMasterAuthGuard] },
  { path: 'webmaster-login', component: WebmasterLoginComponent},

  {path:'map',component:GooglemapComponent, canActivate: [UserAuthGuard]}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
