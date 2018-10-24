import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HallmanageComponent } from './hallmanage.component';

describe('HallmanageComponent', () => {
  let component: HallmanageComponent;
  let fixture: ComponentFixture<HallmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HallmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HallmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
