import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  var mainApp = angular.module("mainApp", []); 
  
  mainApp.controller('studentController', function($scope) { 
  $scope.reset = function(){ 
  $scope.firstName = "Sonoo"; 
  $scope.lastName = "Jaiswal"; 
  $scope.email = "sonoojaiswal@javatpoint.com"; 
  } 
  $scope.reset(); 
  }); 

}
