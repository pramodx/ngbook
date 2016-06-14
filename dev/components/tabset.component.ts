
import {AfterContentInit, QueryList, Query, Component} from "@angular/core";
import {Tab} from "./tabs.component";

@Component({
	selector: 'tabset',
	template: `
		<div class="ui top attached tabular menu">
			<a *ngFor="let tab of tabs" class="item" [class.active]="tab.active" (click)="setActive(tab)">{{ tab.title }}</a>
		</div>
		<ng-content></ng-content>
`
})
export class Tabset implements AfterContentInit {
	tabs: QueryList<Tab>;

	constructor(@Query(Tab) tabs:QueryList<Tab>){
		this.tabs = tabs;
	}

	ngAfterContentInit(){
		this.tabs.toArray()[0].active = true;
	}

	setActive(tab: Tab){
		this.tabs.toArray().forEach((t)=> t.active = false);
		tab.active = true;
	}
}







@Component({
	selector: 'tabset-app',
	directives: [Tabset, Tab],
	template: `
		<tabset>
			<tab title="First Tab">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Quibusdam magni quia ut harum facilis, ullam deleniti porro
				dignissimos quasi at molestiae sapiente natus, neque voluptatum
				ad consequuntur cupiditate nemo sunt.
			</tab>
			<tab *ngFor="let tab of tabs" [title]="tab.title">
				{{ tab.content }}
			</tab>
		</tabset>
`
})
export class TabsetApp {
	tabs: any;

	constructor(){
		this.tabs = [
			{title: 'About', content: 'This is the about tab'},
			{title: 'Blog', content: 'This is our blog'},
			{title: 'Contact Us', content: 'Contact Us here'}
		];
	}
}