import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheaterForecastComponent } from './wheater-forecast.component';

describe('WheaterForecastComponent', () => {
  let component: WheaterForecastComponent;
  let fixture: ComponentFixture<WheaterForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WheaterForecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WheaterForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
