import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { FullnamePipe } from './pipes/fullname.pipe';
import { PluralizePipe } from './pipes/pluralize.pipe';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'contacts',
  },
  {
    path: 'contacts',
    component: ContactListComponent,
  },
  {
    path: 'new-contact',
    component: ContactFormComponent,
  },
  {
    path: 'contact-details/:id',
    component: ContactDetailsComponent,
  },
  {
    // must be the last route config object
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  declarations: [
    // components, directives and pipes that belong to this module are listed here
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactCardComponent,
    ContactListComponent,
    FullnamePipe,
    PluralizePipe,
    PageNotFoundComponent,
    ContactFormComponent,
    ContactDetailsComponent,
    SidebarComponent,
  ],
  imports: [
    // other modules that this module depends on
    BrowserModule, // this module does all DOM manipulation for us
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    // generally services are added here
  ],
  bootstrap: [
    // the components that need to be included in the `src/index.html`
    AppComponent,
  ],
})
export class AppModule {}
