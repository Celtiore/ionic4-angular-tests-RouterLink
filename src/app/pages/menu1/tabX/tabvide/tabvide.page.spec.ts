import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabvidePage } from './tabvide.page';

describe('TabvidePage', () => {
  let component: TabvidePage;
  let fixture: ComponentFixture<TabvidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabvidePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabvidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
