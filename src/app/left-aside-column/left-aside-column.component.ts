import { Component, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import {SocialMediaButton} from "../left-aside-column-classes/socialMediaButton";
import {SocialMediaService} from "../social-media.service";
import { NgStyle } from '@angular/common';


@Component({
    selector: 'app-left-aside-column',
    templateUrl: './left-aside-column.component.html',
    styleUrls: ['./left-aside-column.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [NgStyle]
})
export class LeftAsideColumnComponent implements OnInit {
  private socialMediaService = inject(SocialMediaService);

  buttons?: SocialMediaButton[];

  getSocialMediaButtons() : void{
    this.socialMediaService.getSocialMediaButtons()
      .subscribe(socialMediaButtons => this.buttons = socialMediaButtons);
  }

  ngOnInit() {
    this.getSocialMediaButtons();
  }

}
