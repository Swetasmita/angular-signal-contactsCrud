import { computed, inject, Injectable, signal } from '@angular/core';
import { Contact } from '../models/contact.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  //create a signal here - signals are readonly
  contacts = signal<Contact[]>([
    {
      name: "John Smith",
      email: "j12@gmail.com",
      phone: "08774579",
    },
    {
      name: "Alex Joe",
      email: "aj10@gmail.com",
      phone: "08774572",
    },
    {
      name: "Rosie Smith",
      email: "rs@gmail.com",
      phone: "08723456",
    },
    {
      name: "Marry Walker",
      email: "mk42@gmail.com",
      phone: "08743629",
    },
    {
      name: "Harsh Arora",
      email: "ha12gmail.com",
      phone: "09790301",
    },
    
    {
      name: "Sujan Khan",
      email: "s12gmail.com",
      phone: "09722334",
    },
    
    {
      name: "Michale Jackson",
      email: "mj22@gmail.com",
      phone: "083208134",
    },
  ]);
//show total number of Contacts
  totalContacts = computed(() =>
    this.contacts().length);

  //If exit the limit, show msg to the user
 conditionalContacts =  computed(() => 
  this.totalContacts() >= 8);

  constructor() { }
  router = inject(Router);

  addContact(newContact: Contact) {
    //update the contacts variable signal 
    //([ new array, copy original array])
    setTimeout(() => {
      this.contacts.update((contacts) => ([newContact, ...this.contacts()]))
      this.router.navigate([''])
    }, 1000);
   
  }

  deleteContact(contact : Contact){
    setTimeout(() => {
      this.contacts.update((contacts) => contacts.filter(c => c.email !== contact.email));    
    }, 1000);

  }
}
