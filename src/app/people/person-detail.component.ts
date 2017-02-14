import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

import {PeopleService} from './people.service';

@Component({
    selector: 'hyf-person-detail',
    templateUrl: './person-detail.component.html',
    styles: []
})
export class PersonDetailComponent implements OnInit {

    person: Person

    get roleTitle(): string {
        return this.peopleService.roleTitles[this.person.role];
    }

    constructor(private route: ActivatedRoute,
                private sanitizer: DomSanitizer,
                private peopleService: PeopleService) {
    }

    ngOnInit(): void {
        let id = this.route.snapshot.params['id'];
        this.peopleService.getPersonById(id)
            .subscribe(person => this.person = person);
    }

    getSafeBioHtml(): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(this.person.bio);
    }

    openExternalUrl(url) {
        let win = window.open(url, '_blank');
        win.focus();
    }
}
