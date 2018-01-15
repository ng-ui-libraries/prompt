import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'prompt-header',
    template: `
        <div [class.modal-header]="modal">
            <div [class.form-group]="!modal">
                <ng-content></ng-content>
            </div>
        </div>
    `
})
export class PromptHeaderComponent {

    @Input() modal: boolean = false;
}
