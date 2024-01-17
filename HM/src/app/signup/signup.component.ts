import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApicallService } from '../shared/apicall.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signUpForm! : FormGroup;
  name1!: string;
 
  constructor( private formBuilder: FormBuilder,
     public apicallService:ApicallService){}

  ngOnInit(){
   this.name1= this.apicallService.name
    this.formDetails();

  }

  formDetails(){
    this.signUpForm = this.formBuilder.group({
      fullName:['',[Validators.required]],
      mob:[null,[Validators.maxLength(10),Validators.pattern("^[0-9]*$")]],
      gender:[],
      pan:[],
      password:[],
      confirmPass:[]
    })
}
}
