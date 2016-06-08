import {Component} from "@angular/core";
import {Http, Response, HTTP_PROVIDERS} from "@angular/http";

@Component({
	selector: 'simple-http',
	providers: [HTTP_PROVIDERS],
	template: `
		<h2>Basic Request</h2>
		<button type="button" (click)="makeRequest()">Make Request</button>
		<div *ngIf="loading">loading...</div>
		<pre>{{ data | json }}</pre>
`
})
export class SimpleHTTPComponent {
	data: Object;
	loading: boolean;
	http: Http;

	constructor(http: Http){
		this.http = http;
	}




	makeRequest():void {
		this.loading = true;
		this.http.request('http://jsonplaceholder.typicode.com/posts/1')
			.subscribe((res: Response) => {
				this.data = res.json();
				this.loading = false;
			})
	}
}