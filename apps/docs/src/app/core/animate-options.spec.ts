import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MotionOptionsComponent } from './motion-options';

describe('MotionOptionsComponent', () => {
  let component: MotionOptionsComponent;
  let fixture: ComponentFixture<MotionOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotionOptionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MotionOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
