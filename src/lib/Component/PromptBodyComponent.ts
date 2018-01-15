import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'prompt-body',
    template: `
        <div [class.modal-body]="modal">
            <div [class.form-group]="!modal">
                <ng-content></ng-content>
            </div>
        </div>
    `
})
export class PromptBodyComponent {

    @Input() modal: boolean = false;
}
