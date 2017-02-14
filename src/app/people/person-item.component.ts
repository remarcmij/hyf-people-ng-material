import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {Router} from '@angular/router';

import {PeopleService} from './people.service';

@Component({
    selector: 'hyf-person-item',
    templateUrl: './person-item.component.html',
    styles: [
        `:host {
            cursor: pointer;
        }`,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonItemComponent {

    @Input() person: Person

    get roleTitle(): string {
        return this.peopleService.roleTitles[this.person.role];
    }

    constructor(
        private router: Router,
        private peopleService: PeopleService
    ) {
    }

    getRoleTitle(role) {
        return this.peopleService.roleTitles[role];
    }

    openDetails(): void {
        this.router.navigate(['/person', this.person.id]);
    }

}
