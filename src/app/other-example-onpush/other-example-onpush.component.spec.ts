import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherExampleOnpushComponent } from './other-example-onpush.component';

describe('OtherExampleOnpushComponent', () => {
  let component: OtherExampleOnpushComponent;
  let fixture: ComponentFixture<OtherExampleOnpushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherExampleOnpushComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherExampleOnpushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
