import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactsService } from '../../services/contacts.service';
import { Router, RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [MatInputModule, MatFormField, MatButtonModule, FormsModule, CommonModule,RouterOutlet, RouterLinkWithHref],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.scss'
})
export class AddContactComponent {
  
    contact: Contact = { name: '', email: '', phone: ''};
  //submitted = false;
  constructor() { }

  router = inject(Router);
  contactService = inject(ContactsService);

  save(contactForm : NgForm) {   
    if(contactForm.valid){
      //const payload = { name: this.name, email: this.email, phone: this.phone }
      this.contactService.addContact(this.contact);      
    }   
  }
  // goBack() {
  //   this.router.navigate(['/']); // Navigate to the default page
  // }
}
