import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab2emptyPage } from './tab2empty.page';

describe('Tab2emptyPage', () => {
  let component: Tab2emptyPage;
  let fixture: ComponentFixture<Tab2emptyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab2emptyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab2emptyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
