import { Component } from '@angular/core';
import {TransclusionApp} from "./components/transclusion.component";



@Component({
    selector: 'my-app',
    directives: [TransclusionApp],
    template: `
        <transclusion-app></transclusion-app>    
    `,
})

export class AppComponent {
    
}