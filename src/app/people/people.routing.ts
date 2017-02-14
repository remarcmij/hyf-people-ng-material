import { Routes, RouterModule } from '@angular/router'
import {PersonDetailComponent} from './person-detail.component';

const peopleRoutes: Routes = [
    {path: 'person/:id', component: PersonDetailComponent}
]

export const peopleRouting = RouterModule.forChild(peopleRoutes);