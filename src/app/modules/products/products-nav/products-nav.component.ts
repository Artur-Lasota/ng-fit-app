import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-products-nav',
    templateUrl: './products-nav.component.html',
    styleUrls: ['./products-nav.component.scss']
})

export class ProductsNavigationComponent {

    @Output()
    public urlChanged: EventEmitter<any> = new EventEmitter();

    constructor(translate: TranslateService, private router: Router, private activatedRoute: ActivatedRoute) {
        translate.setDefaultLang('en');
    }

    public redirect(redirectTo: string): void {
        this.urlChanged.emit(redirectTo);
        this.router.navigate(['../products/' + redirectTo], { relativeTo: this.activatedRoute });
    }
}
