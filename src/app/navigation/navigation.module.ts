import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module'
import {MainToolbarComponent} from './main-toolbar.component';
import {ChildToolbarComponent} from './child-toolbar.component';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        MainToolbarComponent,
        ChildToolbarComponent,
    ],
    providers: [],
    exports: [
        MainToolbarComponent,
        ChildToolbarComponent,
    ]
})
export class NavigationModule {
}


