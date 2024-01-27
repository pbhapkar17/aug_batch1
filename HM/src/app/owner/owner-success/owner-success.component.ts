import { Component } from '@angular/core';
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
  showData: boolean =false; 
  headers = ['Owner Name','Owner Contact','Hotel Name', 'Hotel Address', 'Hotel Contact', 'Hotel Menu','Edit','Delete']
constructor(private apicallService: ApicallService){

}

ngOnInit(){
  this.userName = this.apicallService.userName;
  this.getHotelDetails();

}

getHotelDetails(){
this.apicallService.getApiCall('hotelDetails').subscribe(data=>{
   this.hotelData = data;
})
}

  viewHotels(){
    this.hotelsByOwner = []
      if(this.hotelData ){
        this.showData = true
        this.hotelData.forEach((item:any)=>{
          if(item.ownerName == this.userName){
      
            this.hotelsByOwner.push(item)
          }
        })
      }
      console.log('this.hotelsByOwner',this.hotelsByOwner);
      
  }
}
