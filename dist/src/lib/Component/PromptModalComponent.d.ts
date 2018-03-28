import { EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
export declare class PromptModalComponent {
    promptModal: ModalDirective;
    size: string;
    isModalShown: boolean;
    isModalShownChange: EventEmitter<boolean>;
    show(): void;
    hide(): void;
}
