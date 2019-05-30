import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


import { User } from '../model';

@Component({
  selector: 'app-rental-details1',
  templateUrl: './rental-details1.page.html',
  styleUrls: ['./rental-details1.page.scss'],
})
export class RentalDetails1Page implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }


  public user: Array<User> = [];
  public user1: User;
  constructor(private navCtrl: NavController) {
    this.user1 = new User();
    this.user1.rental1 = "Lisbon, Portugal";
    this.user1.rentalphoto1 ="https://traveltipy.com/wp-content/uploads/2018/07/airbnb-lisbon-alfama-3.jpg";
    
    this.user.push(this.user1);
  }
}