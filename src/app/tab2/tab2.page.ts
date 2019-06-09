import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


import { HttpClient } from '@angular/common/http';
import { Booking } from '../model/booking.model';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
 //initialize array 
  ngOnInit(): void {
    // const headers = {
    //   'Access-Control-Allow-Origin': '*'
    // };
    // const options = {
    //   headers: headers
    // };
    this.client
    .get('http://localhost:3000/api/bookings')
    .subscribe( 
      (response) => {
        this.bookings = response;
        
        
      }
    );


  }

  public bookings: any = [];

  constructor(private navCtrl: NavController,
    private client: HttpClient) {

  }
}