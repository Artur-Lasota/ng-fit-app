import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent {
    @Output()
    public urlChanged: EventEmitter<any> = new EventEmitter();

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {

    }

    public redirect(redirectTo: string): void {
        this.urlChanged.emit(redirectTo);
        this.router.navigate(['../' + redirectTo], { relativeTo: this.activatedRoute });
    }
}

