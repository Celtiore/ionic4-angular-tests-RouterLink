import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabTestPage } from './tab-test.page';

describe('TabTestPage', () => {
  let component: TabTestPage;
  let fixture: ComponentFixture<TabTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabTestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
