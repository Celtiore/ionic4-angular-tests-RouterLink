import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu1testPage } from './menu1test.page';

describe('Menu1testPage', () => {
  let component: Menu1testPage;
  let fixture: ComponentFixture<Menu1testPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu1testPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu1testPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
