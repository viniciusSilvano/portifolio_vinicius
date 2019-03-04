import { Component, OnInit } from '@angular/core';
import {BreadCrumb } from "../breadcrumb-classes/breadcrumb";
import { Router, ActivatedRoute, NavigationEnd} from "@angular/router";
import { filter,distinctUntilChanged,map } from 'rxjs/operators';
import { Observable } from 'rxjs';
//Código de https://medium.com/@bo.vandersteene/angular-5-breadcrumb-c225fd9df5cf
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  public breadcrumbs$: Observable<BreadCrumb[]>
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {

     //subscribe to the NavigationEnd event
     this.breadcrumbs$ = this.router.events.pipe( 
       filter(event => event instanceof NavigationEnd ),
       distinctUntilChanged(),
       map(event =>  this.buildBreadCrumb(this.activatedRoute.root)));

  }

  buildBreadCrumb(route: ActivatedRoute, url: string = '', 
    breadcrumbs: Array<BreadCrumb> = []): Array<BreadCrumb> {
  //If no routeConfig is avalailable we are on the root path
    const label = route.routeConfig ? route.routeConfig.data[ 'breadcrumb' ] : 'projetos';
    const path = route.routeConfig ? route.routeConfig.path : '/projetos';
    //In the routeConfig the complete path is not available, 
    //so we rebuild it each time
    const nextUrl = `${url}${path}/`;
    const breadcrumb = {
    label: label,
    url: nextUrl
    };
    const newBreadcrumbs = [ ...breadcrumbs,breadcrumb];

      if (route.firstChild) {
      //If we are not on our current path yet, 
      //there will be more children to look after, to build our breadcumb
      
        const nextUrl = `${url}${path}/`
        
    
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
      
      }
    
    return newBreadcrumbs;
  }
  

}
