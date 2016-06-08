import {Component} from "@angular/core";
import {SearchBox} from "./SearchBox.component";
import {SearchResultComponent} from "./SearchResult.component";
import {SearchResult} from "../objects/SearchResult";
@Component({
	selector: 'youtube-search',
	directives: [SearchBox, SearchResultComponent],
	template: `
		<div class="container">
			<div class="page-header">
				<h1>YouTube Search
					<img style="float: right" *ngIf="loading" src='loadingGif.gif' alt="loading..." />
				</h1>
			
			</div>
			<div class="row">
				<div class="input-group input-group-lg col-md-12">
					<search-box (loading)="loading = $event" (results)="updateResults($event)"></search-box>
				</div>
			</div>
			<div class="row">
				<search-result *ngFor="let result of results" [result]="result"></search-result>
			</div>
		</div>
`
})
export class YouTubeSearchComponent {
	results: SearchResult[];

	updateResults(results: SearchResult[]):void {
		this.results = results;
		console.log('results:', this.results);
	}
}