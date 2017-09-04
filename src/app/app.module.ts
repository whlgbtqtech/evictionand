import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HaeMapComponent } from './hae-map/hae-map.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { BiosComponent } from './bios/bios.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HaeMapComponent,
    NavComponent,
    FooterComponent,
    AboutComponent,
    BiosComponent,
    SliderComponent
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
