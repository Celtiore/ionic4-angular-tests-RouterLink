import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab3emptyPage } from './tab3empty.page';

describe('Tab3emptyPage', () => {
  let component: Tab3emptyPage;
  let fixture: ComponentFixture<Tab3emptyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab3emptyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab3emptyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
