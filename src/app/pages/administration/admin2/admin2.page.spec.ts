import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Admin2Page } from './admin2.page';

describe('Admin2Page', () => {
  let component: Admin2Page;
  let fixture: ComponentFixture<Admin2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Admin2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Admin2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
