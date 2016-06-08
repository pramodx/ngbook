import { Component } from '@angular/core';
import {YouTubeSearchComponent} from "./components/YouTubeSearch.component";



@Component({
    selector: 'my-app',
    directives: [YouTubeSearchComponent],
    template: `
        <h1>Hi</h1>
        <youtube-search></youtube-search>    
    `,
})

export class AppComponent {
    
}