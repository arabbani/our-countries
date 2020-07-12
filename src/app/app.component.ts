import { Component } from '@angular/core';

@Component({
  selector: 'wc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  ngOnInit(): void {
  }

  modeToggle(){
    //this.document.body.classList.add('test');
    document.getElementsByTagName('body')[0].classList.toggle('dark-mode');
  }

}
