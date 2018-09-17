import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu1pagePage } from './menu1page.page';

describe('Menu1pagePage', () => {
  let component: Menu1pagePage;
  let fixture: ComponentFixture<Menu1pagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu1pagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu1pagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
