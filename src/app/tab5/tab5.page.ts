import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


import { Provider } from '../model';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }


  public provider: Array<Provider> = [];
  public provider1: Provider;
  constructor(private navCtrl: NavController) {
    this.provider1 = new Provider();
    this.provider1.rental1 = "Lisbon, Portugal";
    this.provider1.rentalphoto1 ="https://traveltipy.com/wp-content/uploads/2018/07/airbnb-lisbon-alfama-3.jpg";
    
    this.provider.push(this.provider1);
  }
  gorentdtls() {
    this.navCtrl.navigateForward('rental-details1');
  }
}

