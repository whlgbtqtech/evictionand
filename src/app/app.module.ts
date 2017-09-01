import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HaeMapComponent } from './hae-map.component';
import { NavComponent } from './nav.component';
import { FooterComponent } from './footer.component';
import { AboutComponent } from './about/about.component';
import { BiosComponent } from './bios/bios.component';

@NgModule({
  declarations: [
    AppComponent,
    HaeMapComponent,
    NavComponent,
    FooterComponent,
    AboutComponent,
    BiosComponent
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
