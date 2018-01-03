import {Component, NgModule} from '@angular/core';
import {BrowserModule}       from '@angular/platform-browser';
import {CommonModule}        from '@angular/common';
import {NgFormModule}        from '@ng-app-framework/form';
import {PromptModule}        from '../lib/PromptModule';

@Component({
    selector: 'app',
    template: `
        <div class="container">

            <h1>Prompt Components</h1>
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#basic" role="tab">
                        Basic Prompt
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#modal" role="tab">
                        Modal Prompt
                    </a>
                </li>
            </ul>
            <div class="tab-content card">
                <div class="tab-pane active" id="basic" role="tabpanel">
                    <div class="col-12">
                        <prompt (yes)="addYes()" (no)="addNo()">
                            <prompt-header>
                                <h4>Basic Prompt</h4>
                            </prompt-header>
                            <prompt-body>
                                This is the body of the prompt.
                            </prompt-body>
                            <prompt-confirm (click)="addYes()">Yes</prompt-confirm>
                            <prompt-cancel (click)="addNo()">No</prompt-cancel>
                        </prompt>

                        <pre class="card card-body bg-light"></pre>
                        <pre class="card card-body bg-light">{{ model | json }}</pre>
                    </div>
                </div>
                <div class="tab-pane" id="modal" role="tabpanel">
                    <div class="col-12">
                        <prompt-modal (confirm)="addYes()" (cancel)="addNo()" #modal>
                            <prompt-header>
                                <h4>Modal Prompt</h4>
                            </prompt-header>
                            <prompt-body>
                                This is the body of the prompt.
                            </prompt-body>
                            <prompt-confirm>Yes</prompt-confirm>
                            <prompt-cancel>No</prompt-cancel>
                        </prompt-modal>
                        <div class="form-group">
                            <button class="btn btn-primary" (click)="modal.show()">Open Modal</button>
                        </div>
                        <pre class="card card-body bg-light"></pre>
                        <pre class="card card-body bg-light">{{ model | json }}</pre>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class AppComponent {
    model = {
        yesClicks: 0,
        noClicks : 0
    };

    addYes() {
        this.model.yesClicks++;
    }

    addNo() {
        this.model.noClicks++;
    }
}

@NgModule({
    declarations: [AppComponent],
    imports     : [
        BrowserModule,
        CommonModule,
        NgFormModule,
        PromptModule
    ],
    exports     : [AppComponent],
    providers   : [],
    bootstrap   : [AppComponent]

})
export class AppModule {

}
