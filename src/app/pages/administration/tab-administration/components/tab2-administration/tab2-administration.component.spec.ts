import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab2AdministrationComponent } from './tab2-administration.component';

describe('Tab2AdministrationComponent', () => {
  let component: Tab2AdministrationComponent;
  let fixture: ComponentFixture<Tab2AdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab2AdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab2AdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
