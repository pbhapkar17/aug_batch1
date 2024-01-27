import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/shared/apicall.service';

@Component({
  selector: 'app-hotel-register',
  templateUrl: './hotel-register.component.html',
  styleUrls: ['./hotel-register.component.scss']
})
export class HotelRegisterComponent {

  hotelRegForm!:FormGroup;
  showPassword: boolean=false;
  hotelEndPoint = 'hotelDetails'
  constructor(private fb: FormBuilder , private apicallService: ApicallService,
    private router: Router){}

  ngOnInit(){
    this.hotelDetailsForm()
  }

  hotelDetailsForm(){
    this.hotelRegForm = this.fb.group({
      ownerName:[],
      mob: [],
      password:[],
      hotelName: [],
      hotelAddress:[],
      hotelMob:[],
      hotelMenu:[]

    })
  }

  submit(){
    this.apicallService.postApiCall(this.hotelEndPoint,this.hotelRegForm.value).subscribe(respo=>{
       this.router.navigateByUrl('/owner/ownerSuccess')
    }) 

  }
  showPass(){
    this.showPassword =  !this.showPassword;
  }
}
