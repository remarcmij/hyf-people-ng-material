import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import {NavigationModule} from '../navigation/navigation.module';
import {MainSidenavModule} from '../main-sidenav/main-sidenav.module';
import {PeopleComponent} from './people.component';
import {PersonItemComponent} from './person-item.component';
import {PeopleService} from './people.service';
import {PersonDetailComponent} from './person-detail.component';
import {peopleRouting} from './people.routing';

@NgModule({
    imports: [
        SharedModule,
        NavigationModule,
        MainSidenavModule,
        peopleRouting
    ],
    declarations: [
        PeopleComponent,
        PersonItemComponent,
        PersonDetailComponent
    ],
    providers: [
        PeopleService
    ],
    exports: [
        PeopleComponent
    ]
})
export class PeopleModule {
}


