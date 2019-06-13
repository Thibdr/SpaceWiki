import { Component, OnInit } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
model : User= new User;


  constructor() { }

  ngOnInit() {
  }
  
  onSubmit() {
    alert("Sucess")
  }
}
