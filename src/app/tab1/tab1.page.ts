import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Provider } from '../model';
import {HttpClient } from "@angular/common/http";
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  public provider: Provider = new Provider ();

  constructor(
    private navCTRL: NavController, 
    private http: HttpClient ,
    private activatedRoute: ActivatedRoute
    ){}

  
    ngOnInit() {
      this.activatedRoute.queryParamMap.subscribe(
        (parameters: ParamMap) => {
          console.log(parameters);
          console.log("provider_id is: " + parameters.get("provider_id"))
  
  
          const providerId = localStorage.getItem("provider_id");
  
  
          this.http
            .get(`http://localhost:3000/api/providers/${providerId}`)
            .subscribe(
              (response: Provider) => {
                console.log("response: " + response);
                this.provider.id = response.id;
                this.provider.name = response.name;
                this.provider.email = response.email;
                this.provider.profilephoto = response.profilephoto;
                this.provider.today = response.today;
                this.provider.facebook = response.facebook;
                this.provider.phonenumber = response.phonenumber;
                this.provider.livesin= response.livesin;
              }
            );
  
  
          /*Express:
          return res.json({
            id: 123,
            name:"",
            emai:""
  
          })
          */
  
  
        }
      );
    }
  
  }
