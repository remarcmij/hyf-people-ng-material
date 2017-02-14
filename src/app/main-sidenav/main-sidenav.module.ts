import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import {MainSidenavComponent} from './main-sidenav.component';
import {sidenavRouting} from './main-sidenav.routing';
import {AboutModule} from '../about/about.module';

@NgModule({
    imports: [
        SharedModule,
        sidenavRouting,
        AboutModule
    ],
    declarations: [
        MainSidenavComponent,
    ],
    providers: [],
    exports: [
        MainSidenavComponent
    ]
})
export class MainSidenavModule {
}


