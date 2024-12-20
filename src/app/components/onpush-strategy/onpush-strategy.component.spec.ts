import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnpushStrategyComponent } from './onpush-strategy.component';

describe('OnpushStrategyComponent', () => {
  let component: OnpushStrategyComponent;
  let fixture: ComponentFixture<OnpushStrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnpushStrategyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnpushStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
