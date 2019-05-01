import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-trek',
  templateUrl: './star-trek.component.html',
  styleUrls: ['./star-trek.component.css']
})
export class StarTrekComponent implements OnInit {
  isVisible:boolean = true;
  constructor() { }

  ngOnInit() {
  }
  public isDesktop(){
    if (window.screen.width < 1200) { 
      var intro = document.getElementsByTagName("video")[0];
      intro.muted = true;
    }
  }
  isNotVisible(){
    this.isVisible = false;
  }
}
