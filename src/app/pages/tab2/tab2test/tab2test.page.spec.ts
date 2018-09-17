import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab2testPage } from './tab2test.page';

describe('Tab2testPage', () => {
  let component: Tab2testPage;
  let fixture: ComponentFixture<Tab2testPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab2testPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab2testPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
