import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'hyf-main-sidenav',
    templateUrl: './main-sidenav.component.html',
    styles: [
        `md-sidenav {
          width: 75%;
          max-width: 350px;
        }`
    ]
})
export class MainSidenavComponent {

    @Input() opened = false;
    @Output() close = new EventEmitter<void>();

    constructor() {
    }
}
