import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { ContactsService } from '../../services/contacts.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Contact } from '../../models/contact.model';
@Component({
  selector: 'app-contacts-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatButtonModule, MatIcon],
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.scss'
})
export class ContactsListComponent {
  constructor(){}
  //inject service
  contacts = inject(ContactsService).contacts;
  //inject signal
  contactService = inject(ContactsService);

  delete(contact : Contact){
 this.contactService.deleteContact(contact);
  }
}
