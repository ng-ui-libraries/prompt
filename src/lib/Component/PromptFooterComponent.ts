import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'prompt-footer',
    template: `
        <div [class.modal-footer]="modal">
            <ng-content></ng-content>
        </div>
    `
})
export class PromptFooterComponent {

    @Input() modal: boolean = false;
}
