import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Property } from '../model/property.model';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.page.html',
  styleUrls: ['./property-details.page.scss'],
})
export class PropertyDetailsPage implements OnInit {
  public property: any = {};

  
  constructor(private http: HttpClient,
    private navCTRL: NavController,
    private activatedRoute: ActivatedRoute) {}
    

 ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(
      (parameters: any) => {
        console.log(parameters);
        // console.log("property_id is: " + parameters.get("property_id"))


        const propertyId = parameters.params.propertyId;
        console.log(propertyId);

    this.http.get(`http://localhost:3000/api/properties/${propertyId}`)
    .subscribe( 
      (response) => {
        console.log(response);
        this.property = response;
      }
    )
  }

  

    )}}

    
