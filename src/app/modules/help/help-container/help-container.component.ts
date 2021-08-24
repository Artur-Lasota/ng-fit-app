import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-help-container',
    templateUrl: './help-container.component.html',
    styleUrls: ['./help-container.component.scss']
})

export class HelpContainerComponent {

    constructor(translate: TranslateService) {
        translate.setDefaultLang('en');
    }
}
