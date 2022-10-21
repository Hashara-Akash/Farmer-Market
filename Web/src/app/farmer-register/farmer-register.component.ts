import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {SharedService} from 'src/app/shared.service';


@Component({
  selector: 'app-farmer-register',
  templateUrl: './farmer-register.component.html',
  styleUrls: ['./farmer-register.component.css'],
})
export class FarmerRegisterComponent implements OnInit {
  constructor(private service:SharedService,private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      pwd: ['', Validators.required],
      conpassword: ['', Validators.required],
      gender: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      longitude: ['', Validators.required],
      latitude: ['', Validators.required],
    });
  }

  loginForm: FormGroup;
  isSubmitted = false;

  get formControls() {
    return this.loginForm.controls;
  }

  login() {
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    sessionStorage.setItem("farmer",JSON.stringify(this.loginForm.value) );
   // farmerRegistration
    this.service.farmerRegistration(this.loginForm.value).subscribe(data =>{
      console.log(JSON.stringify(data));
      alert(JSON.stringify(data));
      this.router.navigate(['/farmer-login']);

      });

      
    }
    // this.authService.login(this.loginForm.value);
    //this.router.navigateByUrl('/admin');
  }
