import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1AdministrationComponent } from './tab1-administration.component';

describe('Tab1AdministrationComponent', () => {
  let component: Tab1AdministrationComponent;
  let fixture: ComponentFixture<Tab1AdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab1AdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab1AdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
