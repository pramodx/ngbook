import { Component } from '@angular/core';
import {RoutesDemoApp} from "./router.component";
import {ROUTER_DIRECTIVES, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {AboutComponent} from "./about.component";
import {ContactComponent} from "./contact.component";


@Component({
    selector: 'my-app',
    directives: [RoutesDemoApp, ROUTER_DIRECTIVES],
    template: `
        <h1>Hi</h1>
        <hr>  
        <router-app></router-app>
    `,
})
@Routes([
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'contactus', component: ContactComponent }
])
export class AppComponent {
    
}
