import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistSongComponent } from './playlist-song.component';

describe('PlaylistSongComponent', () => {
  let component: PlaylistSongComponent;
  let fixture: ComponentFixture<PlaylistSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaylistSongComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
