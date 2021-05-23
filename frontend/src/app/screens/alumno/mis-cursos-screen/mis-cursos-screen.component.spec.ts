import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisCursosScreenComponent } from './mis-cursos-screen.component';

describe('MisCursosScreenComponent', () => {
  let component: MisCursosScreenComponent;
  let fixture: ComponentFixture<MisCursosScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisCursosScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisCursosScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
