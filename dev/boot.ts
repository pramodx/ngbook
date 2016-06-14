///<reference path="../typings/browser.d.ts"/>
import {Component, provide} from "@angular/core";
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS, ROUTER_PRIMARY_COMPONENT, Router, RouteConfig } from "@angular/router-deprecated";

import {HTTP_PROVIDERS} from "@angular/http";
import {APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from "@angular/common";

/*
*SERVICES
*/
import {SPOTIFY_PROVIDERS} from "./services/spotify.service";



/*
COMPONENTS
*/
import {SearchComponent} from "./components/search.component";
import {AlbumComponent} from "./components/album.component";
import {ArtistComponent} from "./components/artist.component";
import {TrackComponent} from "./components/track.component";

@Component({
	selector: 'router-app',
	directives: [ROUTER_DIRECTIVES],
	template: `<router-outlet></router-outlet>`
})
@RouteConfig([
	{path: '/', name: 'root', redirectTo: ['Search']},
	{path: '/search', name: 'Search', component: SearchComponent },
	{ path: '/artists/:id', name: 'Artists', component: ArtistComponent },
	{ path: '/tracks/:id', name: 'Tracks', component: TrackComponent },
	{ path: '/albums/:id', name: 'Albums', component: AlbumComponent }
])
class AppComponent {
	query: string;
	constructor(public router: Router){

	}
}
bootstrap(AppComponent, [
	ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	SPOTIFY_PROVIDERS,
	provide(ROUTER_PRIMARY_COMPONENT, {useValue: AppComponent}),
	provide(APP_BASE_HREF, {useValue:'/'}),
	provide(LocationStrategy, {useClass: HashLocationStrategy})
]).catch((err: any)=> console.error(err));