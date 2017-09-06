import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEvictionComponent } from './about-eviction.component';

describe('AboutEvictionComponent', () => {
  let component: AboutEvictionComponent;
  let fixture: ComponentFixture<AboutEvictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutEvictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutEvictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
