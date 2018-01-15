import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {ModalDirective}                                    from 'ngx-bootstrap';

@Component({
    selector: 'prompt-modal',
    template: `
        <div *ngIf="isModalShown" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true" bsModal #promptModal="bs-modal"
             [config]="{backdrop: 'static', show: true}">
            <div class="modal-dialog modal-{{size}}">
                <div class="modal-content">
                    <div class="modal-header">
                        <ng-content select="prompt-header"></ng-content>
                    </div>
                    <div class="modal-body">
                        <ng-content select="prompt-body"></ng-content>
                    </div>
                    <div [class.modal-body]="confirm.nativeElement.children.length > 0 || cancel.nativeElement.children.length > 0">
                        <div [class.form-group]="confirm.nativeElement.children.length > 0 || cancel.nativeElement.children.length > 0">
                            <span (click)="hide();" #confirm>
                                <ng-content select="prompt-confirm"></ng-content>
                            </span>
                            <span (click)="hide();" #cancel>
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
    @Input() size: string = 'sm';

    @Input() isModalShown: boolean = false;


    show() {
        this.isModalShown = true;
    }

    hide() {
        this.isModalShown = false;
    }

}
