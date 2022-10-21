import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router, private service:SharedService) {}

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
    
    this.service.userLogin(this.loginForm.value).subscribe(data =>{
      console.log(JSON.stringify(data));
      sessionStorage.setItem("user",JSON.stringify(data))
        if(data.length == 1){
          this.router.navigate(['map']);
        }
      
    //  this.rows = data;
    
      });
    
    // this.authService.login(this.loginForm.value);
    //this.router.navigateByUrl('/admin');
  }
}
