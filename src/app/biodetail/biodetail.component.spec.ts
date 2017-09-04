import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioDetailComponent } from './biobetail.component';

describe('BioDetailComponent', () => {
  let component: BioDetailComponent;
  let fixture: ComponentFixture<BioDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
