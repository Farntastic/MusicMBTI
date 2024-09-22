import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMbtiComponent } from './card-mbti.component';

describe('CardMbtiComponent', () => {
  let component: CardMbtiComponent;
  let fixture: ComponentFixture<CardMbtiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardMbtiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMbtiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
