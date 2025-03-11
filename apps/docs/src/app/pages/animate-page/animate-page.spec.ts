import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimatePageComponent } from './animate-page';

describe('AnimatePageComponent', () => {
  let component: AnimatePageComponent;
  let fixture: ComponentFixture<AnimatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
