import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD
import { AdminComponent } from '../admin.component';
=======
import { AdminComponent } from './admin.component';
>>>>>>> 8eecc2ba33cb8c0f4311d7275cb894488ef01c94

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
