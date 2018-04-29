import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {OnChange}                                          from '@ng-app-framework/core';
import {ModalDirective}                                    from 'ngx-bootstrap';

@Component({
    selector: 'prompt-modal',
    template: `
        <div *ngIf="isModalShown" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true" bsModal #promptModal="bs-modal"
             [config]="getConfig()">
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

    @OnChange @Input() isModalShown: boolean = false;
    @Output() isModalShownChange             = new EventEmitter<boolean>();

    @Input() isBackdropStatic = true;

    @Input() keyboard = true;

    show() {
        this.isModalShown = true;
    }

    hide() {
        this.isModalShown = false;
    }

    getConfig() {
        let config = {
            show: true,
            keyboard: this.keyboard
        };

        if (this.isBackdropStatic) {
            config['backdrop'] = 'static';
        }

        return config;
    }

}
