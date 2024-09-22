import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleEffectComponent } from './bubble-effect.component';

describe('BubbleEffectComponent', () => {
  let component: BubbleEffectComponent;
  let fixture: ComponentFixture<BubbleEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BubbleEffectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BubbleEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
