import { Component } from '@angular/core';

@Component({
  selector: 'wc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  toggleTheme(event: any): void {
    event.preventDefault();
    document.getElementsByTagName('body')[0].classList.toggle('dark-mode');
  }

}
