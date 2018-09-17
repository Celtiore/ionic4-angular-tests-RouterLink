import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab2menuPage } from './tab2menu.page';

describe('Tab2menuPage', () => {
  let component: Tab2menuPage;
  let fixture: ComponentFixture<Tab2menuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab2menuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab2menuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
