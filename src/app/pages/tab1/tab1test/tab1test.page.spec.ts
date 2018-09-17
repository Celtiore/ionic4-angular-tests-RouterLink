import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1testPage } from './tab1test.page';

describe('Tab1testPage', () => {
  let component: Tab1testPage;
  let fixture: ComponentFixture<Tab1testPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab1testPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab1testPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
