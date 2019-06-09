import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


import { HttpClient } from '@angular/common/http';
import { Property } from '../model/property.model';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  
  ngOnInit(): void {
    // const headers = {
    //   'Access-Control-Allow-Origin': '*'
    // };
    // const options = {
    //   headers: headers
    // };
    this.client
    .get('http://localhost:3000/api/properties')
    .subscribe( 
      (response) => {
        this.properties = response;
        
        
      }
    )
  }

  public properties: any = [];

  constructor(private navCtrl: NavController,
    private client: HttpClient) {

  }

navToProperty(property: Property) {
  
  this.navCtrl
  
    .navigateForward("property-details", {
      
      queryParams: {
        q: "ionic",
        propertyImgURL: property.imageURL,
        propertyId: property.id,
        propertyAddress: property.address,
        propertyLocation: property.location,
        propertyDescription: property.description,
        propertyPricePerNIght: property.pricePerNight,
        propertyProviderId: property.providerId,
        propertyName: property.name,
      }
    });
}
}
