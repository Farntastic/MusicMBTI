import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistHeadedComponent } from './playlist-headed.component';

describe('PlaylistHeadedComponent', () => {
  let component: PlaylistHeadedComponent;
  let fixture: ComponentFixture<PlaylistHeadedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaylistHeadedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistHeadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
