import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

const API_END_POINT = 'http://localhost:3000';

@Injectable()
export class PeopleService {

    roleTitles = {
        staff: 'Staff Member',
        mentor: 'Mentor',
        student: 'Student'
    };

    constructor(private http: Http) {
    }

    getAllPeople(): Observable<Person[]> {
        return this.http.get(API_END_POINT + '/persons')
            .map((res: Response) => res.json());
    }

    getPersonById(id) {
        return this.http.get(API_END_POINT + '/persons/' + id)
            .map((res: Response) => res.json());
    }
}