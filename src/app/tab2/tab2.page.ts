import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


import { HttpClient } from '@angular/common/http';
import { Property } from '../model/property.model';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  
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
}