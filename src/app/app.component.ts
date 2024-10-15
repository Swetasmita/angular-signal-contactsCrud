import { Component, effect, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ContactsService } from './services/contacts.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbarModule, MatIconModule, MatButtonModule, MatSnackBarModule, RouterOutlet,
    RouterLinkWithHref],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-signals-crud';
 currentRoute = '';
  //inject all computed signals
  totalContacts = inject(ContactsService).totalContacts;
  conditionalContacts = inject(ContactsService).conditionalContacts;

  snackBar = inject(MatSnackBar);
  router = inject(Router);
  constructor(private contactsService: ContactsService,
    private route: ActivatedRoute) {

      this.router.events.subscribe(() => {
        this.currentRoute = this.router.url;
      }) 
    //effects keep track of their dependencies dynamically
    //effects shows notifications, shows something errors/warnings instead of update
    effect(() => {
      if (contactsService.conditionalContacts()) {
        this.snackBar.open("You have reached your limit. please remove some contacts before adding again!", `Close`);
      }
    })
  }



}
