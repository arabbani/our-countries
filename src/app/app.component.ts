import { Component } from '@angular/core';

@Component({
  selector: 'wc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  isDarkModeActive: boolean = false;

  toggleTheme(event: any): void {
    event.preventDefault();
    this.isDarkModeActive = !this.isDarkModeActive;
    document.getElementsByTagName('body')[0].classList.toggle('dark-mode');
  }

}
