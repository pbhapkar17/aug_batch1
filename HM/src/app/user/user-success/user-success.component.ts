import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/shared/apicall.service';

@Component({
  selector: 'app-user-success',
  templateUrl: './user-success.component.html',
  styleUrls: ['./user-success.component.scss']
})
export class UserSuccessComponent {
  hotelData: any;
  headers = ['Owner Name','Owner Contact','Hotel Name', 'Hotel Address', 'Hotel Contact', 'Hotel Menu','Book Now']
  showData: boolean =false;
  constructor(private apicallService: ApicallService, private router: Router) {

  }
  ngOnInit() {
    this.getHotelData()
  }

  viewHotels() {
this.showData=!this.showData;
  }
  getHotelData() {
    this.apicallService.getApiCall('hotelDetails').subscribe(res => {
      this.hotelData = res;
      console.log(res);
      
    })
  }

  bookNow(){

  }
}
