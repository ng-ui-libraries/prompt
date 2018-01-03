import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'prompt-body',
    template: `
        <div class="form-group">
            <ng-content></ng-content>
        </div>
    `
})
export class PromptBodyComponent {

}
