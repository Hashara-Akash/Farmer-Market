import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {SharedService} from 'src/app/shared.service';


@Component({
  selector: 'app-webmaster-dashboard',
  templateUrl: './webmaster-dashboard.component.html',
  styleUrls: ['./webmaster-dashboard.component.css'],
})
export class WebmasterDashboardComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router,private service:SharedService) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      pwd: ['', Validators.required],
      conpassword: ['', Validators.required],
      email: ['', Validators.required],
      type: ['', Validators.required]
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

    console.log(this.loginForm.value.type)



    this.service.userCreation(this.loginForm.value).subscribe(data =>{
      console.log(JSON.stringify(data));
      alert("User Created!")
   });
  }
}