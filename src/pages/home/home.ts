import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MyService} from "../../app/MyService";
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public contactsList: any[];

  constructor(public navCtrl: NavController, public contacts: Contacts) {
    this.contactsList = []
    this.getContacts()
  }

  getContacts() {
    console.log('getContacts')
    this.contacts.find(["displayName", "phoneNumbers"], {multiple: true}).then((contacts) => {
      this.contactsList = contacts
      console.log(contacts);
    })
  }

  addContact() {
    console.log('addContact')
    let contact: Contact = this.contacts.create();

    contact.displayName = 'Smith' + new Date().getTime().toString();
    contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
    console.log(contact)
    contact.save().then(
      () => console.log('Contact saved!', contact),
      (error: any) => console.error('Error saving contact.', error)
    );
    this.contactsList.push(contact)
  }
}
