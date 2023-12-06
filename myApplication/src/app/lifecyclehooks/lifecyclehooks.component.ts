import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css']
})
export class LifecyclehooksComponent {

  name:any; //noraml prop
  //@Input() surName:any;  //input property
 
  constructor(){
    console.log("constructor calling..");
    
  }
  //A component instance has a lifecycle that starts when Angular
  // instantiates the component class and renders the component view and its child views. 
//ngOnchange() if component is having @input bound properties then ngOnChanges lc h get triiger first
//ngOnInit()
//ngDoCheck()
//ngAfterContentInit()
//ngOnDestroy()
//ngAfterContentChecked()
//ngAfterViewInit()
//ngAfterViewChecked()
ngOnchange() {
  console.log("onchanges calling");
}
  ngOnInit(){
    console.log("oninit calling");
    
  }
  ngDoCheck(){
    console.log("do chk calling");
    
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit ");
    
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked ");
    
  }
  ngAfterViewInit(){
  console.log("ngAfterViewInit ");
  
}
ngAfterViewChecked(){
console.log("ngAfterViewChecked ");

}

ngOnDestroy(){
  console.log("ngOnDestroy ");
}
}
