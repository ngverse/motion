import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MotionPageComponent } from './motion-page';

describe('MotionPageComponent', () => {
  let component: MotionPageComponent;
  let fixture: ComponentFixture<MotionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotionPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MotionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
