import {Component} from '@angular/core';

@Component({
    selector: 'prompt',
    template: `
        <ng-content select="prompt-header"></ng-content>
        <ng-content select="prompt-body"></ng-content>
        <div class="form-group">
            <ng-content select="prompt-confirm"></ng-content>
            <ng-content select="prompt-cancel"></ng-content>
        </div>
    `
})
export class PromptComponent {
}
