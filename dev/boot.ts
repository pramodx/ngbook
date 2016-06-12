///<reference path="../typings/browser.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from "@angular/router";

import { AppComponent } from "./app.component";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {provide} from "@angular/core";
import {RoutesDemoApp} from "./router.component";

bootstrap(AppComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);