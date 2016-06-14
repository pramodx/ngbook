import { Component } from '@angular/core';
import {HostSampleApp1} from "./components/HostSampleApp.component";



@Component({
    selector: 'my-app',
    directives: [HostSampleApp1],
    template: `
        <h1>Hi</h1>
        <hr>
        <host-sample-app></host-sample-app>
    `,
})

export class AppComponent {
    
}