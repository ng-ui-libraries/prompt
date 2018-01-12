import {Component, NgModule}              from '@angular/core';
import {BrowserModule}                    from '@angular/platform-browser';
import {CommonModule}                     from '@angular/common';
import {ModalModule}                      from 'ngx-bootstrap/modal';
import {PromptBodyComponent}              from './Component/PromptBodyComponent';
import {PromptCancelComponent}            from './Component/PromptCancelComponent';
import {PromptComponent}                  from './Component/PromptComponent';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PromptConfirmComponent}           from './Component/PromptConfirmComponent';
import {PromptHeaderComponent}            from './Component/PromptHeaderComponent';
import {PromptModalComponent}             from './Component/PromptModalComponent';

@NgModule({
    declarations: [
        PromptComponent,
        PromptHeaderComponent,
        PromptBodyComponent,
        PromptConfirmComponent,
        PromptCancelComponent,
        PromptModalComponent
    ],
    imports     : [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule.forRoot()
    ],
    exports     : [
        PromptComponent,
        PromptHeaderComponent,
        PromptBodyComponent,
        PromptConfirmComponent,
        PromptCancelComponent,
        PromptModalComponent
    ],
    providers   : [],
    bootstrap   : []

})
export class PromptModule {

}
