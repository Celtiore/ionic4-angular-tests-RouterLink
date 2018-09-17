import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu2pagePage } from './menu2page.page';

describe('Menu2pagePage', () => {
  let component: Menu2pagePage;
  let fixture: ComponentFixture<Menu2pagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu2pagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu2pagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
