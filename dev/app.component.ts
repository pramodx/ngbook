import { Component } from '@angular/core';
import {SimpleHTTPComponent} from "./simplehttp.component";



@Component({
    selector: 'my-app',
    directives: [SimpleHTTPComponent],
    template: `
        <simple-http></simple-http>     
    `,
})

export class AppComponent {
    
}