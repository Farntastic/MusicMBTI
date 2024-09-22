import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoottedComponent } from './footted.component';

describe('FoottedComponent', () => {
  let component: FoottedComponent;
  let fixture: ComponentFixture<FoottedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoottedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoottedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
