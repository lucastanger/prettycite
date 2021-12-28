import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ApiComponent } from './api/api.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: 'lets-begin',
        component: ApiComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '**',
        redirectTo: 'search'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
