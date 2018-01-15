import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'prompt-footer',
    template: `
        <div [class.modal-footer]="modal">
            <div class="form-group">
                <ng-content></ng-content>
            </div>
        </div>
    `
})
export class PromptFooterComponent {

    @Input() modal: boolean = false;
}
