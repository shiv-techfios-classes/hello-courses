import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroComponent } from './intro/intro.component';
import { CoursesComponent } from './courses/courses.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root-hello',
  standalone: true,
  imports: [RouterOutlet, CommonModule,NavbarComponent, IntroComponent, CoursesComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'hello-courses';
  
  isActive = false;

  isSubsribed = true;

  email: string= 'nguser@gmail.com';

  registeredUsers = ['Prerna', 'Arti', 'Dorji', 'Tahar', 'Sidik', 'Alex'];

  subscribe() {

    console.log('Thanks for subscribing.');
    this.notifyUpdates(true);

  }

  notifyUpdates(subscribed:boolean) {

    if(subscribed) {

      console.log('You will be notified on new events.');

    } else {

      console.log('You will need to subscribe to be notified on events.');
    }

  
  }

}
