import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MyService} from "../../app/MyService";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public myservice: MyService) {
    this.test()
    myservice.getContact()
  }

  test() {
    console.log('zoulou')
  }

}
