import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TriggerItemComponent } from './trigger-item';

describe('TriggerItemComponent', () => {
  let component: TriggerItemComponent;
  let fixture: ComponentFixture<TriggerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TriggerItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TriggerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
