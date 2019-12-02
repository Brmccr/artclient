import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtcarouselComponent } from './artcarousel.component';

describe('ArtcarouselComponent', () => {
  let component: ArtcarouselComponent;
  let fixture: ComponentFixture<ArtcarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtcarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
