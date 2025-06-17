import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './inc/header/header';
import { Frontpage } from './home/frontpage/frontpage';
import { About } from './home/about/about';
import { Blog } from './home/blog/blog';
import { Contact } from './home/contact/contact';
import {HttpClient, provideHttpClient} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Header,
    Frontpage,
    About,
    Blog,
    Contact
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
