import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {ModalDirective}                             from 'ngx-bootstrap';

@Component({
    selector: 'prompt-modal',
    template: `
        <div class="modal fade" tabindex="-1" role="dialog" aria-hidden="true" bsModal #promptModal="bs-modal">
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <div class="modal-header">
                        <ng-content select="prompt-header"></ng-content>
                    </div>
                    <div class="modal-body">
                        <ng-content select="prompt-body"></ng-content>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <span (click)="confirm.emit();promptModal.hide();">
                                <ng-content select="prompt-confirm"></ng-content>
                            </span>
                            <span (click)="cancel.emit();promptModal.hide();">
                                <ng-content select="prompt-cancel"></ng-content>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class PromptModalComponent {

    @ViewChild('promptModal') promptModal: ModalDirective;

    @Output() confirm = new EventEmitter<any>();
    @Output() cancel  = new EventEmitter<any>();

    ngOnInit() {
        this.promptModal.config = {
            backdrop: 'static'
        };
    }

    show() {
        this.promptModal.show();
    }

    hide() {
        this.promptModal.hide();
    }

}
