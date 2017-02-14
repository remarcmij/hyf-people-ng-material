import {Component, OnInit, Input} from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'hyf-child-toolbar',
    templateUrl: './child-toolbar.component.html',
    styles: []
})
export class ChildToolbarComponent {

    @Input() title: string;
    @Input() backRoute: string[];

    constructor(
        private router: Router,
        private location: Location
    ) {
    }

    goBack() {
        if (this.backRoute) {
            this.router.navigate(this.backRoute)
        } else {
            this.location.back()
        }
    }
}
