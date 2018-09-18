import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAdministrationPage } from './tab-administration.page';

describe('TabAdministrationPage', () => {
  let component: TabAdministrationPage;
  let fixture: ComponentFixture<TabAdministrationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabAdministrationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabAdministrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
