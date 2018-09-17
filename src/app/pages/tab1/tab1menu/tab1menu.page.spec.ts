import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1menuPage } from './tab1menu.page';

describe('Tab1menuPage', () => {
  let component: Tab1menuPage;
  let fixture: ComponentFixture<Tab1menuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab1menuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab1menuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
