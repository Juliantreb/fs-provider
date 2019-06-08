import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public provider: any = {
    name: "",
    email: "",
    password: "",

    livesin: "",
    phonenumber:"",
    today: "",
    facebook:"",
    profilephoto: "",

  };

  constructor(private httpClient: HttpClient,
    private navCTRL: NavController) {}

  submit() {
    console.log("Submitting to the server...");
    console.log(this.provider);
    
    this.httpClient
      .post("http://localhost:3000/api/providers", this.provider)
      .subscribe(
        (response) => {
          console.log(response);

          this.navCTRL.navigateForward (
            ""
          )
        },
        (err) => {
          console.log(err);
          alert ("ERROR! EMAIL ALREADY IN USE")
        }
      );
  }


  ngOnInit() {
  }

}
