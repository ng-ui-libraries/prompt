import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'prompt-cancel',
    template: `
        <button class="btn btn-secondary">
            <ng-content></ng-content>
        </button>
    `
})
export class PromptCancelComponent {

}
