import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HaeMapComponent } from './hae-map/hae-map.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { BiosComponent } from './bios/bios.component';
import { SliderComponent } from './slider/slider.component';
import { BioDetailComponent } from './biodetail/biodetail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'bio/:id', component: BioDetailComponent },
  {
    path: 'bios',
    component: BiosComponent,
    data: { title: 'EvictionAnd Team' }
  },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HaeMapComponent,
    NavComponent,
    FooterComponent,
    AboutComponent,
    BiosComponent,
    SliderComponent,
    BioDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
