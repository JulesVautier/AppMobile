import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

export class MyService {

  constructor(public contacts: Contacts) {
    console.log('my service');
  }

  public getContact() {
    console.log('contact')
    this.contacts.find(["displayName", "phoneNumbers"], {multiple: true}).then((contacts) => {
      console.log(contacts);
    })
  }
}
