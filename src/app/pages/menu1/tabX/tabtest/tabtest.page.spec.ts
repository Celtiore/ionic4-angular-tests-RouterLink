import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabtestPage } from './tabtest.page';

describe('TabtestPage', () => {
  let component: TabtestPage;
  let fixture: ComponentFixture<TabtestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabtestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabtestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
