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
  
  isNotVisible(){
    this.isVisible = false;
  }
}
