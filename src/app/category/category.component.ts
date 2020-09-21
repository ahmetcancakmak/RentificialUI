import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Service } from '../app.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[Service]
})
export class CategoryComponent implements OnInit {
  constructor(private service:Service) {
   }
   
  @Output() msgEvent = new EventEmitter<string>();
  tabData;
  ngOnInit(){

  }
  selectedTabOffers(){
    this.msgEvent.emit("Offers")
  }
  selectedTabBookings(){
    this.msgEvent.emit("Bookings")
  }
  selectedTabRental(){
    this.msgEvent.emit("Rental")
  }
  selectedTabRates(){
    this.msgEvent.emit("Rates")
  }
  selectedTabCustomers(){
    this.msgEvent.emit("Customer")
  }
  selectedTabFinancials(){
    this.msgEvent.emit("Financials")
  }
  selectedTabFleet(){
    this.msgEvent.emit("Fleet")
  }
  selectedTabCompany(){
    this.msgEvent.emit("Company")
  }
  selectedTabReports(){
    this.msgEvent.emit("Reports")
  }
  selectedTabSettings(){
    this.msgEvent.emit("Setting")
  }

}