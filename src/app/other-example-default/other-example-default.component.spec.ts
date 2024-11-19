import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherExampleDefaultComponent } from './other-example-default.component';

describe('OtherExampleDefaultComponent', () => {
  let component: OtherExampleDefaultComponent;
  let fixture: ComponentFixture<OtherExampleDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherExampleDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherExampleDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
