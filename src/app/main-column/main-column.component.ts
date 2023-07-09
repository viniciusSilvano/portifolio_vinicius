import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-main-column',
  templateUrl: './main-column.component.html',
  styleUrls: ['./main-column.component.css']
})
export class MainColumnComponent implements OnInit {
  public isHome: boolean = false;
  constructor(
    private router : Router,
    private location: Location
    ) { }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      // see also
      if(val instanceof NavigationEnd){
        if(val.url == "/projeto" || val.url == "/"){
          this.isHome = true;
        }else{
          this.isHome = false;
        }
      }
     });
  }

  getBack() : void{
    console.log();
    this.router.navigateByUrl(this._recuperarUrlPai());
  }

  _recuperarUrlPai(){
    let urlSegments = this.router.url.split('/');
    urlSegments = urlSegments.filter(x => {if(x){return true;} return false;});
    let returnUrl = '';
    if(urlSegments.length > 1){
      for(let i = 0; i < urlSegments.length; i++){
          let urlSegment = urlSegments[i];
          if((i + 1) == urlSegments.length){
            break;
          }
          returnUrl += `/${urlSegment}`
      }
    }else{
      returnUrl = `/${urlSegments[0]}`;
    }
    return returnUrl;
  }

}
