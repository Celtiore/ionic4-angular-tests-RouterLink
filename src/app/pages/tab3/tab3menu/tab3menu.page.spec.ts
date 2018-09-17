import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab3menuPage } from './tab3menu.page';

describe('Tab3menuPage', () => {
  let component: Tab3menuPage;
  let fixture: ComponentFixture<Tab3menuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab3menuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab3menuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
