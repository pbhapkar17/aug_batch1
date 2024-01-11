import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-reactive-form',
  templateUrl: './sign-up-reactive-form.component.html',
  styleUrls: ['./sign-up-reactive-form.component.css']
})
export class SignUpReactiveFormComponent {

  signUpForm!: FormGroup;
  show:boolean=false;
  showPassword :boolean=false;
  misMatch:boolean=false;
  postApiResponse: any;
  constructor(private formBuilder: FormBuilder ,
     private dataService :DataService, private router: Router ) { }

  ngOnInit() {
    this.formLoad()
  }


  formLoad() {

     this.signUpForm = this.formBuilder.group({
      name : ['',[Validators.required]],
      mobile : [989898989,[Validators.maxLength(10)]],
      pancard:['',[Validators.pattern('^[A-Z]{5}[0-9]{4}[A-Z]{1}$'),Validators.maxLength(10)]],
      email:[''],
      pass:[''],
      confirmPass:[''],
      city:["",[this.spacesNotAllowed]]
     })
  }


  spacesNotAllowed(inputVal:any){
     const value = inputVal.value;
    let isIncludeSpace =  /\s{2,}/.test(value);
    return isIncludeSpace ? { spaceNotAllowed: true } : null;
    //value.toLowerCase().includes("clone") //to show err when clone word got enterd 
  }

 
      passwordMatchValidator() {
        
        const password = this.signUpForm.get('pass')?.value;
        const confirmPassword = this.signUpForm.get('confirmPass')?.value;
    
        if (password != confirmPassword) {
          this.misMatch= true ;
        } else {
          this.misMatch= false ;
        }
    
        
      }
    
  
  confirmPasswordMatch(){

  }
  // submit(){
  //   let endPoint='user';
    
  //   console.log(this.signUpForm.value);
  //   this.dataService.postApiCall(endPoint,this.signUpForm.value).subscribe(res=>{
  //     this.postApiResponse  = res;
  //   })

  //      this.router.navigateByUrl('home') ; 

  // }
  async submit(){
    let endPoint='user';
    console.log(this.signUpForm.value);
    this.postApiResponse = await this.dataService.postApiCall(endPoint,this.signUpForm.value).toPromise()
    if(this.postApiResponse?.id){
       this.router.navigateByUrl('home') ; 
    }
    else{
      this.router.navigateByUrl('signUpForm')  ;
    }
  }
  toShowPassword(){
    //  this.showPassword= true;
    //  this.show = true
    this.showPassword = !this.showPassword;
    this.show = !this.show ;
  }
}
