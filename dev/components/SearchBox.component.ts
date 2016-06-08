

import {Component, OnInit, EventEmitter, ElementRef} from "@angular/core";
import {SearchResult} from "../objects/SearchResult";
import {YouTubeService} from "../services/YouTube.service";
import {Observable} from "rxjs/Rx";
@Component({
	outputs: ['loading', 'results'],
	selector: 'search-box',
	template: `
		<input type="text" class="form-control" placeholder="Search" autofocus/>
`
})

export class SearchBox implements OnInit {
	loading: EventEmitter<boolean> = new EventEmitter<boolean>();
	results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

	constructor(public youtube: YouTubeService, private el: ElementRef) {

	}

	ngOnInit(): void {
		Observable.fromEvent(this.el.nativeElement, 'keyup')
			.map((e: any) => e.target.value)
			.filter((text: string) => text.length > 4)
			.debounceTime(1000)
			.do(() => this.loading.next(true))
			.map((query: string) => this.youtube.search(query))
			.switch()
			.subscribe(
				(results: SearchResult[]) => {
					this.loading.next(false);
					this.results.next(results);
				},
				(err: any) => {
					console.log(err);
					this.loading.next(false);
				},
				()=>{
					this.loading.next(false);
				}
			);
	}
}