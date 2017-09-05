import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndMapsComponent } from './and-maps.component';

describe('AndMapsComponent', () => {
  let component: AndMapsComponent;
  let fixture: ComponentFixture<AndMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
