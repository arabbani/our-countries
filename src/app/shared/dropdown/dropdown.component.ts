import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wc-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  constructor() { }

  showDrop: boolean = false;
  showActive: boolean = false;
  showDropEvent(){
      this.showDrop = !this.showDrop;       
      this.showActive = !this.showActive;       
  }
    
  ngOnInit(): void {
    
    

  }

}
