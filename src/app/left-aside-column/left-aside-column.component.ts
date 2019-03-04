import { Component, OnInit } from '@angular/core';
import {SocialMediaButton} from "../left-aside-column-classes/socialMediaButton";
import {SocialMediaService} from "../social-media.service";


@Component({
  selector: 'app-left-aside-column',
  templateUrl: './left-aside-column.component.html',
  styleUrls: ['./left-aside-column.component.css']
})
export class LeftAsideColumnComponent implements OnInit {
  buttons: SocialMediaButton[];
  constructor(private socialMediaService : SocialMediaService) { }

  getSocialMediaButtons() : void{
    this.socialMediaService.getSocialMediaButtons()
      .subscribe(socialMediaButtons => this.buttons = socialMediaButtons);
  }

  ngOnInit() {
    this.getSocialMediaButtons();
  }

}
