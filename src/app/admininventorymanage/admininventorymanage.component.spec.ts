import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmininventorymanageComponent } from './admininventorymanage.component';

describe('AdmininventorymanageComponent', () => {
  let component: AdmininventorymanageComponent;
  let fixture: ComponentFixture<AdmininventorymanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmininventorymanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmininventorymanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
