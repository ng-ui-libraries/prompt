import { Component, EventEmitter, Input, NgModule, Output, ViewChild } from '@angular/core';
import { OnChange } from '@ng-app-framework/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
var PromptComponent = /** @class */ (function () {
    function PromptComponent() {
    }
    return PromptComponent;
}());
PromptComponent.decorators = [
    { type: Component, args: [{
                selector: 'prompt',
                template: "\n        <ng-content select=\"prompt-header\"></ng-content>\n        <ng-content select=\"prompt-body\"></ng-content>\n        <div class=\"form-group\">\n            <ng-content select=\"prompt-confirm\"></ng-content>\n            <ng-content select=\"prompt-cancel\"></ng-content>\n        </div>\n    "
            },] },
];
/**
 * @nocollapse
 */
PromptComponent.ctorParameters = function () { return []; };
var PromptBodyComponent = /** @class */ (function () {
    function PromptBodyComponent() {
        this.modal = false;
    }
    return PromptBodyComponent;
}());
PromptBodyComponent.decorators = [
    { type: Component, args: [{
                selector: 'prompt-body',
                template: "\n        <div [class.modal-body]=\"modal\">\n            <div [class.form-group]=\"!modal\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n    "
            },] },
];
/**
 * @nocollapse
 */
PromptBodyComponent.ctorParameters = function () { return []; };
PromptBodyComponent.propDecorators = {
    'modal': [{ type: Input },],
};
var PromptHeaderComponent = /** @class */ (function () {
    function PromptHeaderComponent() {
        this.modal = false;
    }
    return PromptHeaderComponent;
}());
PromptHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'prompt-header',
                template: "\n        <div [class.modal-header]=\"modal\">\n            <div [class.form-group]=\"!modal\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n    "
            },] },
];
/**
 * @nocollapse
 */
PromptHeaderComponent.ctorParameters = function () { return []; };
PromptHeaderComponent.propDecorators = {
    'modal': [{ type: Input },],
};
var PromptConfirmComponent = /** @class */ (function () {
    function PromptConfirmComponent() {
    }
    return PromptConfirmComponent;
}());
PromptConfirmComponent.decorators = [
    { type: Component, args: [{
                selector: 'prompt-confirm',
                template: "\n        <button class=\"btn btn-primary\">\n            <ng-content></ng-content>\n        </button>\n    "
            },] },
];
/**
 * @nocollapse
 */
PromptConfirmComponent.ctorParameters = function () { return []; };
var PromptCancelComponent = /** @class */ (function () {
    function PromptCancelComponent() {
    }
    return PromptCancelComponent;
}());
PromptCancelComponent.decorators = [
    { type: Component, args: [{
                selector: 'prompt-cancel',
                template: "\n        <button class=\"btn btn-secondary\">\n            <ng-content></ng-content>\n        </button>\n    "
            },] },
];
/**
 * @nocollapse
 */
PromptCancelComponent.ctorParameters = function () { return []; };
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var PromptModalComponent = /** @class */ (function () {
    function PromptModalComponent() {
        this.size = 'sm';
        this.isModalShown = false;
        this.isModalShownChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    PromptModalComponent.prototype.show = function () {
        this.isModalShown = true;
    };
    /**
     * @return {?}
     */
    PromptModalComponent.prototype.hide = function () {
        this.isModalShown = false;
    };
    return PromptModalComponent;
}());
PromptModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'prompt-modal',
                template: "\n        <div *ngIf=\"isModalShown\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" bsModal #promptModal=\"bs-modal\"\n             [config]=\"{backdrop: 'static', show: true}\">\n            <div class=\"modal-dialog modal-{{size}}\">\n                <div class=\"modal-content\">\n                    <ng-content select=\"prompt-header\"></ng-content>\n                    <ng-content select=\"prompt-body\"></ng-content>\n                    <ng-content select=\"prompt-footer\"></ng-content>\n                </div>\n            </div>\n        </div>\n    "
            },] },
];
/**
 * @nocollapse
 */
PromptModalComponent.ctorParameters = function () { return []; };
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
var PromptFooterComponent = /** @class */ (function () {
    function PromptFooterComponent() {
        this.modal = false;
    }
    return PromptFooterComponent;
}());
PromptFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'prompt-footer',
                template: "\n        <div [class.modal-footer]=\"modal\">\n            <div [class.form-group]=\"!modal\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n    "
            },] },
];
/**
 * @nocollapse
 */
PromptFooterComponent.ctorParameters = function () { return []; };
PromptFooterComponent.propDecorators = {
    'modal': [{ type: Input },],
};
var NgPromptModule = /** @class */ (function () {
    function NgPromptModule() {
    }
    return NgPromptModule;
}());
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
NgPromptModule.ctorParameters = function () { return []; };
// Put all exports here!
/**
 * Generated bundle index. Do not edit.
 */
export { PromptComponent, PromptBodyComponent, PromptHeaderComponent, PromptConfirmComponent, PromptCancelComponent, PromptModalComponent, NgPromptModule, PromptFooterComponent as ɵa };
//# sourceMappingURL=prompt.es5.js.map
