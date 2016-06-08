///<reference path="../typings/browser.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from "@angular/router";

import { AppComponent } from "./app.component";
import {youTubeServiceInjectables} from "./services/YouTube.service";
import {HTTP_PROVIDERS} from "@angular/http";

bootstrap(AppComponent, [ROUTER_PROVIDERS, youTubeServiceInjectables, HTTP_PROVIDERS]);