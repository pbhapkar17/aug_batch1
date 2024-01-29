import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/shared/apicall.service';

@Component({
  selector: 'app-owner-success',
  templateUrl: './owner-success.component.html',
  styleUrls: ['./owner-success.component.scss']
})
export class OwnerSuccessComponent {
  hotelData:any;
  userName:any;
  hotelsByOwner:any
  showData: boolean = false; 
  endPoint :any;
  headers = ['Owner Name','Owner Contact','Hotel Name', 'Hotel Address', 'Hotel Contact', 'Hotel Menu','Edit','Delete']
constructor(private apicallService: ApicallService,private router: Router){

}

ngOnInit(){
 this.endPoint = 'hotelDetails'
  this.userName = this.apicallService.userName;
  this.getHotelDetails();

}

async getHotelDetails(){
  this.hotelData =   await this.apicallService.getApiCall('hotelDetails').toPromise()
}

  viewHotels(){
    this.hotelsByOwner = []
      if(this.hotelData ){
       
        this.hotelData.forEach((item:any)=>{
          if(item.ownerName == this.userName){
      
            this.hotelsByOwner.push(item)
          }
        })
      }
      if( this.hotelsByOwner.length > 0){
        this.showData = true
   
      }
      console.log('this.hotelsByOwner',this.hotelsByOwner);
      
  }
 async edit(id:any){

  this.apicallService.dataById = await this.apicallService.getApiCall(this.endPoint, id).toPromise()
  console.log('  this.apicallService.dataById)',  this.apicallService.dataById)
  
  this.router.navigateByUrl('/owner/hotelRegister')

  }
  reg(){
    this.apicallService.dataById = null;
  }
 async delete(id:any){
  let res = await this.apicallService.deleteAPiCall('hotelDetails',id).toPromise();
    this.getHotelDetails();
    this.viewHotels()
  }
}
