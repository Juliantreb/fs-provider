import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  loginClick() {
    this.nav.navigateForward('tabs/tab1');
  }

goRegister() {
  this.nav.navigateForward('');
}
}
