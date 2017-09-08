import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bio } from '../bio';

@Component({
  selector: 'app-bios',
  templateUrl: './bios.component.html',
  styleUrls: ['./bios.component.css']
})
export class BiosComponent implements OnInit {

  bios: string[];
  constructor(private http: HttpClient){
}

  ngOnInit(): void {
    this.http.get('/assets/bios.json').subscribe(data => {
      console.log(data);
      this.bios = data['bios'];
    });
  }


}
