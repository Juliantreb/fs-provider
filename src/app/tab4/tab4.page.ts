import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http'
import { Provider } from '@angular/compiler/src/compiler_facade_interface';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  public property: any = {
    name: "",
    address: "",
    description: "",
    location: "",
    pricePerNight:"",
    imageURL: "",
    providerId: "",


  };
  

  public providerId: string;

  constructor(private http: HttpClient,
    private navCTRL: NavController,
    private activatedRoute: ActivatedRoute) {}

  Button() {
    console.log("Submitting to the server...");
    console.log(this.property);
    this.property.providerId = this.providerId;
    
    this.http
      .post("http://localhost:3000/api/properties", this.property)
      .subscribe(
        (response) => {
          console.log(response);
          const propertyId = JSON.parse(JSON.stringify(response)).id;

          localStorage.setItem("property_id", propertyId)

          

          this.navCTRL.navigateForward (
            "/tabs/tab5"
          )
        },
        (err) => {
          console.log(err);
          alert ("ERROR! EMAIL ALREADY IN USE")
        }
      );
  }


  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(
      (parameters: ParamMap) => {
        console.log(parameters);
        console.log("provider_id is: " + parameters.get("provider_id"))


        this.providerId = localStorage.getItem("provider_id");

  
        

      }
    );
  }

}


