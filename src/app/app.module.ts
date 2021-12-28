import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ApiComponent } from './api/api.component';
import { NgVariableModule } from './shared/ng-variable/ng-variable.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SearchComponent,
        AboutComponent,
        ContactComponent,
        ApiComponent
    ],
    imports: [BrowserModule, AppRoutingModule, NgVariableModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
