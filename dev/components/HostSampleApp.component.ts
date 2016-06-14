
import {Component} from "@angular/core";
import {Popup} from "../directives/popup.directive";

@Component({
	selector: 'host-sample-app',
	directives: [Popup],
	template: `
		<div class="ui message" popup message="Clicked message">
			<div class="header">
				Learning Directives
			</div>
			<p>
				Popup Directive
			</p>
		</div>
		<i class="alarm icon" popup message="Clicked alarm icon">Alarm icon</i>
`
})


export class HostSampleApp1 {

}