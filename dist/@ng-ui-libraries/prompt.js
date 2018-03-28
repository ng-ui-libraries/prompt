import { Component, EventEmitter, Input, NgModule, Output, ViewChild } from '@angular/core';
import { OnChange } from '@ng-app-framework/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

class PromptComponent {
}
PromptComponent.decorators = [
    { type: Component, args: [{
                selector: 'prompt',
                template: `
        <ng-content select="prompt-header"></ng-content>
        <ng-content select="prompt-body"></ng-content>
        <div class="form-group">
            <ng-content select="prompt-confirm"></ng-content>
            <ng-content select="prompt-cancel"></ng-content>
        </div>
    `
            },] },
];
/**
 * @nocollapse
 */
PromptComponent.ctorParameters = () => [];

class PromptBodyComponent {
    constructor() {
        this.modal = false;
    }
}
PromptBodyComponent.decorators = [
    { type: Component, args: [{
                selector: 'prompt-body',
                template: `
        <div [class.modal-body]="modal">
            <div [class.form-group]="!modal">
                <ng-content></ng-content>
            </div>
        </div>
    `
            },] },
];
/**
 * @nocollapse
 */
PromptBodyComponent.ctorParameters = () => [];
PromptBodyComponent.propDecorators = {
    'modal': [{ type: Input },],
};

class PromptHeaderComponent {
    constructor() {
        this.modal = false;
    }
}
PromptHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'prompt-header',
                template: `
        <div [class.modal-header]="modal">
            <div [class.form-group]="!modal">
                <ng-content></ng-content>
            </div>
        </div>
    `
            },] },
];
/**
 * @nocollapse
 */
PromptHeaderComponent.ctorParameters = () => [];
PromptHeaderComponent.propDecorators = {
    'modal': [{ type: Input },],
};

class PromptConfirmComponent {
}
PromptConfirmComponent.decorators = [
    { type: Component, args: [{
                selector: 'prompt-confirm',
                template: `
        <button class="btn btn-primary">
            <ng-content></ng-content>
        </button>
    `
            },] },
];
/**
 * @nocollapse
 */
PromptConfirmComponent.ctorParameters = () => [];

class PromptCancelComponent {
}
PromptCancelComponent.decorators = [
    { type: Component, args: [{
                selector: 'prompt-cancel',
                template: `
        <button class="btn btn-secondary">
            <ng-content></ng-content>
        </button>
    `
            },] },
];
/**
 * @nocollapse
 */
PromptCancelComponent.ctorParameters = () => [];

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class PromptModalComponent {
    constructor() {
        this.size = 'sm';
        this.isModalShown = false;
        this.isModalShownChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    show() {
        this.isModalShown = true;
    }
    /**
     * @return {?}
     */
    hide() {
        this.isModalShown = false;
    }
}
PromptModalComponent.decorators = [
    { type: Component, args: [{
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
            },] },
];
/**
 * @nocollapse
 */
PromptModalComponent.ctorParameters = () => [];
PromptModalComponent.propDecorators = {
    'promptModal': [{ type: ViewChild, args: ['promptModal',] },],
    'size': [{ type: Input },],
    'isModalShown': [{ type: Input },],
    'isModalShownChange': [{ type: Output },],
};
__decorate([
    OnChange,
    __metadata("design:type", Boolean)
], PromptModalComponent.prototype, "isModalShown", void 0);

class PromptFooterComponent {
    constructor() {
        this.modal = false;
    }
}
PromptFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'prompt-footer',
                template: `
        <div [class.modal-footer]="modal">
            <div [class.form-group]="!modal">
                <ng-content></ng-content>
            </div>
        </div>
    `
            },] },
];
/**
 * @nocollapse
 */
PromptFooterComponent.ctorParameters = () => [];
PromptFooterComponent.propDecorators = {
    'modal': [{ type: Input },],
};

class NgPromptModule {
}
NgPromptModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    PromptComponent,
                    PromptHeaderComponent,
                    PromptBodyComponent,
                    PromptConfirmComponent,
                    PromptCancelComponent,
                    PromptModalComponent,
                    PromptFooterComponent
                ],
                imports: [
                    BrowserModule,
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    ModalModule.forRoot()
                ],
                exports: [
                    PromptComponent,
                    PromptHeaderComponent,
                    PromptBodyComponent,
                    PromptConfirmComponent,
                    PromptCancelComponent,
                    PromptModalComponent,
                    PromptFooterComponent
                ],
                providers: [],
                bootstrap: []
            },] },
];
/**
 * @nocollapse
 */
NgPromptModule.ctorParameters = () => [];

// Put all exports here!

/**
 * Generated bundle index. Do not edit.
 */

export { PromptComponent, PromptBodyComponent, PromptHeaderComponent, PromptConfirmComponent, PromptCancelComponent, PromptModalComponent, NgPromptModule, PromptFooterComponent as ɵa };
//# sourceMappingURL=prompt.js.map
