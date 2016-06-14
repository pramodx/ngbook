import {Component, Input} from "@angular/core";
@Component({
	selector: 'tab',
	template: `
		<div class="ui bottom attached tab segment" [class.active]="active">
			<ng-content></ng-content>
		</div>
`
})
export class Tab {
	@Input('title') title: string;
	active: boolean;
	name: string;
}git