import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {ModalDirective}                                    from 'ngx-bootstrap';

@Component({
    selector: 'prompt-modal',
    template: `
        <div *ngIf="isModalShown" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true" bsModal #promptModal="bs-modal"
             [config]="{backdrop: 'static', show: true}">
            <div class="modal-dialog modal-{{size}}">
                <div class="modal-content">
                    <ng-content select="prompt-header"></ng-content>
                    <ng-content select="prompt-body"></ng-content>
                    <ng-content select="prompt-footer"></ng-content>
                </div>
            </div>
        </div>
    `
})
export class PromptModalComponent {

    @ViewChild('promptModal') promptModal: ModalDirective;
    @Input() size: string = 'sm';

    @Input() isModalShown: boolean = false;


    show() {
        this.isModalShown = true;
    }

    hide() {
        this.isModalShown = false;
    }

}
