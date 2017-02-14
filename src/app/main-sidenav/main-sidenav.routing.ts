import { Routes, RouterModule } from '@angular/router'
import {AboutComponent} from '../about/about.component';

const sidenavRoutes: Routes = [
    {path: 'about', component: AboutComponent}
];

export const sidenavRouting = RouterModule.forChild(sidenavRoutes);