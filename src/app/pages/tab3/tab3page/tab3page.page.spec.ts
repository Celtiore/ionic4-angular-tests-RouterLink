import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab3pagePage } from './tab3page.page';

describe('Tab3pagePage', () => {
  let component: Tab3pagePage;
  let fixture: ComponentFixture<Tab3pagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab3pagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab3pagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
