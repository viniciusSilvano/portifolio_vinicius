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
        if(val.url == "/projetos" || val.url == "/"){
          this.isHome = true;
        }else{
          this.isHome = false;
        }
      }
     });
  }

  getBack() : void{
    this.location.back();
  }

}
