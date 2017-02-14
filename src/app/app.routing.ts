import {Routes, RouterModule} from '@angular/router';

import {PeopleComponent} from './people/people.component';

const appRoutes: Routes = [
    {path: '', component: PeopleComponent},
    {path: '**', redirectTo: ''}
]

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);
