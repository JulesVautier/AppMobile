import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MyService} from "../../app/MyService";

import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';


//let contact: Contact = this.contacts.create();

//console.log('contact')

// contact.name = new ContactName(null, 'Smith', 'John');
// contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
// contact.save().then(
//   () => console.log('Contact saved!', contact),
//   (error: any) => console.error('Error saving contact.', error)
// );

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    this.test()
  }

  test() {
    console.log('zoulou')
  }

}
