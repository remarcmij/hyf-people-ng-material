import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'hyf-main-toolbar',
    templateUrl: './main-toolbar.component.html'
})
export class MainToolbarComponent {
    @Output() openSidenav = new EventEmitter<void>();
    @Input() title: string;

    constructor() {
    }

    visitMainSite(): void {
        let win = window.open('http://www.hackyourfuture.net/', '_blank');
        win.focus();
    }
}
