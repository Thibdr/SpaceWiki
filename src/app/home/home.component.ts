import { Component, OnInit } from '@angular/core';
import { GetImageService } from '../get-image.service';

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
    if (window.screen.width < 1200) { 
      var audioSaber = document.getElementsByTagName("audio")[0];
      audioSaber.volume = 0;
      var audioSong = document.getElementsByTagName("audio")[1];
      audioSong.volume = 0;
    }
  }

  public isDesktop(){
    if (window.screen.width < 1200) { 
      var intro = document.getElementsByTagName("video")[0];
      intro.muted = true;
    }
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