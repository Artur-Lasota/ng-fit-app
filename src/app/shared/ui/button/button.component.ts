import { Component, Input } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})

export class ButtonComponent {

    @Input()
    label: string | undefined;
    @Input()
    color: string | undefined;

    constructor(translate: TranslateService) {
    }
}
