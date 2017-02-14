import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {SharedModule} from './shared/shared.module';
import {PeopleModule} from './people/people.module';
import {AppComponent} from './app.component';
import {routing, appRoutingProviders} from './app.routing';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        HttpModule,
        routing,
        PeopleModule
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
