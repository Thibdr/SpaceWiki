import { Component, OnInit } from '@angular/core';
import { GetImageService } from '../get-image.service';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showControls:boolean = false;
  isVisible:boolean = true;
  public images : string[];
  public description : string[];
  public title : string;
  private myService:GetImageService;

  constructor(param_service: GetImageService) { 
    this.myService = param_service;
    this.images = [];
  }

  ngOnInit() {
  }

  public changeImage():void{
    this.myService.randomize();
    this.myService.getImage(this.title).subscribe(
      ( param_images:string[]) => {
        this.images = param_images;
      }
    );
    this.myService.getDescription(this.title).subscribe(
      ( param_description:string[]) => {
        this.description = param_description;
      }
    );
  }

  public handleClick( param:string ){
    this.myService.getImage(param).subscribe(
      ( param_images:string[]) => {
        this.images = param_images;
      }
    );
    this.myService.getDescription(param).subscribe(
      ( param_description:string[]) => {
        this.description = param_description;
        this.title = param;
      }
    );
  }
  playSaber(){
    var audio = document.getElementsByTagName("audio")[0];
    audio.play();
  }
  isNotVisible(){
    this.isVisible = false;
  }
  showAudioControls(){
    if (this.showControls == true){
      this.showControls = false;
    }else{
      this.showControls = true;
    }
  }
}