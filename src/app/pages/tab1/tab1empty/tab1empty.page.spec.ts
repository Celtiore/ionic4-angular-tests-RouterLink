import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1emptyPage } from './tab1empty.page';

describe('Tab1emptyPage', () => {
  let component: Tab1emptyPage;
  let fixture: ComponentFixture<Tab1emptyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab1emptyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab1emptyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
