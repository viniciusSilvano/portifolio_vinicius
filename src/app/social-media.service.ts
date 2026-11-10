import { Service } from '@angular/core';
import {SocialMediaButton} from "../app/left-aside-column-classes/socialMediaButton";
import {SOCIALS_MEDIA_BUTTONS} from "../app/left-aside-column-classes/SOCIAL_MEDIA_BUTTONS";
import {Observable,of} from "rxjs";

@Service()
export class SocialMediaService {
  getSocialMediaButtons() : Observable<SocialMediaButton[]>{
    return of(SOCIALS_MEDIA_BUTTONS);
  }
  constructor() { }
}
