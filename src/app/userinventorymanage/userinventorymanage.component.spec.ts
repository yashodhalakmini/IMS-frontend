import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinventorymanageComponent } from './userinventorymanage.component';

describe('UserinventorymanageComponent', () => {
  let component: UserinventorymanageComponent;
  let fixture: ComponentFixture<UserinventorymanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserinventorymanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserinventorymanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
