import {Component, OnInit} from '@angular/core';

import {PeopleService} from './people.service';

@Component({
    selector: 'hyf-people',
    templateUrl: './people.component.html',
    styles: []
})
export class PeopleComponent implements OnInit {

    persons: Person[]
    sidenavOpened = false;

    constructor(private peopleService: PeopleService) {
    }

    ngOnInit() {
        this.peopleService.getAllPeople()
            .subscribe(persons => {
                this.persons = persons;
            });
    }
}
