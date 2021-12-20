import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarInitComponent } from './navbar-init.component';

describe('NavbarInitComponent', () => {
  let component: NavbarInitComponent;
  let fixture: ComponentFixture<NavbarInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarInitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
