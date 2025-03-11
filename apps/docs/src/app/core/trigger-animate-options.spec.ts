import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TriggerAnimateOptionsComponent } from './trigger-animate-options';

describe('TriggerAnimateOptionsComponent', () => {
  let component: TriggerAnimateOptionsComponent;
  let fixture: ComponentFixture<TriggerAnimateOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TriggerAnimateOptionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TriggerAnimateOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
