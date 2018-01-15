import {Component, NgModule} from '@angular/core';
import {BrowserModule}       from '@angular/platform-browser';
import {CommonModule}        from '@angular/common';
import {NgPromptModule}      from '../lib/NgPromptModule';

@Component({
    selector: 'app',
    template: `
        <div class="container">
            <h3>Prompts</h3>
            <div class="row">
                <div class="col-3">
                    <div class="nav flex-column nav-pills" aria-orientation="vertical" role="tablist">
                        <a class="nav-link active" data-toggle="pill" href="#basic" role="tab">
                            Basic Prompt
                        </a>
                        <a class="nav-link" data-toggle="pill" href="#modal" role="tab">
                            Modal Prompt
                        </a>
                    </div>
                </div>
                <div class="col-9">
                    <div class="tab-content">
                        <div class="tab-pane active" id="basic" role="tabpanel">
                            <div class="col-12">
                                <prompt>
                                    <prompt-header>
                                        <h4>Basic Prompt</h4>
                                    </prompt-header>
                                    <prompt-body>
                                        This is the body of the prompt.
                                    </prompt-body>
                                    <prompt-confirm (click)="addYes()">Yes</prompt-confirm>
                                    <prompt-cancel (click)="addNo()">No</prompt-cancel>
                                </prompt>

                                <pre class="card card-body bg-light">{{basicMarkup}}</pre>
                                <pre class="card card-body bg-light">{{ model | json }}</pre>
                            </div>
                        </div>
                        <div class="tab-pane" id="modal" role="tabpanel">
                            <div class="col-12">
                                <prompt-modal #modal>
                                    <prompt-header>
                                        <h4>Modal Prompt</h4>
                                    </prompt-header>
                                    <prompt-body>
                                        This is the body of the prompt.
                                    </prompt-body>
                                    <prompt-confirm (click)="addYes()">Yes</prompt-confirm>
                                    <prompt-cancel (click)="addNo()">No</prompt-cancel>
                                </prompt-modal>
                                <div class="form-group">
                                    <button class="btn btn-primary" (click)="modal.show()">Open Modal</button>
                                </div>
                                <pre class="card card-body bg-light">{{modalMarkup}}</pre>
                                <pre class="card card-body bg-light">{{ model | json }}</pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class PromptDemoComponent {
    model = {
        yesClicks: 0,
        noClicks : 0
    };

    basicMarkup = `
<prompt>
    <prompt-header>
        <h4>Basic Prompt</h4>
    </prompt-header>
    <prompt-body>
        This is the body of the prompt.
    </prompt-body>
    <prompt-confirm (click)="addYes()">Yes</prompt-confirm>
    <prompt-cancel (click)="addNo()">No</prompt-cancel>
</prompt>`;

    modalMarkup = `
<prompt-modal #modal>
    <prompt-header>
        <h4>Modal Prompt</h4>
    </prompt-header>
    <prompt-body>
        This is the body of the prompt.
    </prompt-body>
    <prompt-confirm (click)="addYes()">Yes</prompt-confirm>
    <prompt-cancel (click)="addNo()">No</prompt-cancel>
</prompt-modal>
`;

    addYes() {
        this.model.yesClicks++;
    }

    addNo() {
        this.model.noClicks++;
    }
}

@NgModule({
    declarations: [PromptDemoComponent],
    imports     : [
        BrowserModule,
        CommonModule,
        NgPromptModule
    ],
    exports     : [PromptDemoComponent],
    providers   : [],
    bootstrap   : [PromptDemoComponent]

})
export class AppModule {

}
