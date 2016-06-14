import { Component } from '@angular/core';
import {TabsetApp} from "./components/tabset.component";



@Component({
    selector: 'my-app',
    directives: [TabsetApp],
    template: `
        <h1>Hi</h1>
        <hr> 
        <tabset-app></tabset-app>
    `,
})

export class AppComponent {
    
}