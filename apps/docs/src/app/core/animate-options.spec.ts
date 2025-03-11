import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimateOptionsComponent } from './animate-options';

describe('AnimateOptionsComponent', () => {
  let component: AnimateOptionsComponent;
  let fixture: ComponentFixture<AnimateOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimateOptionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimateOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
