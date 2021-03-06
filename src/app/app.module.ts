import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HaeMapComponent } from './hae-map/hae-map.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { BiosComponent } from './bios/bios.component';
import { SliderComponent } from './slider/slider.component';
import { BioDetailComponent } from './biodetail/biodetail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AndMapsComponent } from './and-maps/and-maps.component';
import { AboutEvictionComponent } from './about-eviction/about-eviction.component';
import { AboutTeamComponent } from './about-team/about-team.component';
import { AboutFAQComponent } from './about-faq/about-faq.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'about-eviction', component: AboutEvictionComponent },
  { path: 'about-faq', component: AboutFAQComponent },
  { path: 'about-team', component: AboutTeamComponent },
  { path: 'and-maps', component: AndMapsComponent },
  { path: 'bios', component: BiosComponent },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AndMapsComponent,
    HaeMapComponent,
    NavComponent,
    FooterComponent,
    AboutComponent,
    BiosComponent,
    SliderComponent,
    BioDetailComponent,
    PageNotFoundComponent,
    AboutEvictionComponent,
    AboutTeamComponent,
    AboutFAQComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
