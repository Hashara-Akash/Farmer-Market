import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-webmaster-login',
  templateUrl: './webmaster-login.component.html',
  styleUrls: ['./webmaster-login.component.css']
})
export class WebmasterLoginComponent implements OnInit {
 
  constructor(private formBuilder: FormBuilder, private router: Router,private service:SharedService) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      pwd: ['', Validators.required],
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
    sessionStorage.setItem("webmaster",JSON.stringify(this.loginForm.value) );    
    console.log(this.loginForm.value.username)
    console.log(this.loginForm.value.pwd)
    
    if(this.loginForm.value.username == "admin" && this.loginForm.value.pwd == "admin"){
      this.router.navigate(['/webmaster-dashboard']);

    }
  
  
   
  }
}
