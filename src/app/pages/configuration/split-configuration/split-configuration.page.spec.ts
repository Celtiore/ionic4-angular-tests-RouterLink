import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitConfigurationPage } from './split-configuration.page';

describe('SplitConfigurationPage', () => {
  let component: SplitConfigurationPage;
  let fixture: ComponentFixture<SplitConfigurationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitConfigurationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitConfigurationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
