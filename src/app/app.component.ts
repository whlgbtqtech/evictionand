import { Component } from '@angular/core';
import { Nav } from './nav/nav';
import { HaeMap } from './hae-map/hae-map';
import { Footer } from './footer/footer';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'evictionand';
  constructor(private http: HttpClient){
  }

}
