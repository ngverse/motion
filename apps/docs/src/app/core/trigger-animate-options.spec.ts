import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TriggerMotionOptionsComponent } from './trigger-motion-options';

describe('TriggerMotionOptionsComponent', () => {
  let component: TriggerMotionOptionsComponent;
  let fixture: ComponentFixture<TriggerMotionOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TriggerMotionOptionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TriggerMotionOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
