import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFAQComponent } from './about-faq.component';

describe('AboutFAQComponent', () => {
  let component: AboutFAQComponent;
  let fixture: ComponentFixture<AboutFAQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutFAQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
