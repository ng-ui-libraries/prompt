import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'prompt-confirm',
    template: `
        <button class="btn btn-primary">
            <ng-content></ng-content>
        </button>
    `
})
export class PromptConfirmComponent {

}
