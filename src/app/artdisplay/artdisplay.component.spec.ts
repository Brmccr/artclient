import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtdisplayComponent } from './artdisplay.component';

describe('ArtdisplayComponent', () => {
  let component: ArtdisplayComponent;
  let fixture: ComponentFixture<ArtdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
