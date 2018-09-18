import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Admin1Page } from './admin1.page';

describe('Admin1Page', () => {
  let component: Admin1Page;
  let fixture: ComponentFixture<Admin1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Admin1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Admin1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
