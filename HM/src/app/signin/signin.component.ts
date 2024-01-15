import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

   signInForm! : FormGroup;

   constructor(private formBuilder:FormBuilder){

   }
  ngOnInit(){
    this.formDetails()
  }

    formDetails(){
      this.signInForm = this.formBuilder.group({
        userName:['',[Validators.required]],
        password:[]
      })
    }
  
}
