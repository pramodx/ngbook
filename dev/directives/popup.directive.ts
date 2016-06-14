import {Directive, ElementRef} from "@angular/core";
@Directive({
	selector: '[popup]',
	inputs: ['message'],
	host: {
		'(click)':'displayMessage()'
	}
})
export class Popup {
	message: String;

	constructor(_elementRef: ElementRef){
		console.log(_elementRef);
	}

	displayMessage():void {
		alert(this.message);
	}
}
