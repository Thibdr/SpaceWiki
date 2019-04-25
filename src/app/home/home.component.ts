import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isVisible:boolean = true;

  constructor() { }

  ngOnInit() {
    
  }
  
  playSaber(){
    var audio = document.getElementsByTagName("audio")[0];
    audio.play();
  }
  isNotVisible(){
    this.isVisible = false;
  }
}
