import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumartistComponent } from './albumartist.component';

describe('AlbumartistComponent', () => {
  let component: AlbumartistComponent;
  let fixture: ComponentFixture<AlbumartistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumartistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumartistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
