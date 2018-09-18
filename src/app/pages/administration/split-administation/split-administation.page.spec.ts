import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitAdministationPage } from './split-administation.page';

describe('SplitAdministationPage', () => {
  let component: SplitAdministationPage;
  let fixture: ComponentFixture<SplitAdministationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitAdministationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitAdministationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
