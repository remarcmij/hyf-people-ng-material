import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import {NavigationModule} from '../navigation/navigation.module';
import { AboutComponent } from './about.component';

@NgModule({
    imports: [
        SharedModule,
        NavigationModule
    ],
    declarations: [AboutComponent],
    providers: [],
    exports: []
})
export class AboutModule {
}


