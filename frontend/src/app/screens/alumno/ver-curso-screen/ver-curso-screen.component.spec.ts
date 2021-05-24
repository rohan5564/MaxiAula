import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCursoScreenComponent } from './ver-curso-screen.component';

describe('VerCursoScreenComponent', () => {
  let component: VerCursoScreenComponent;
  let fixture: ComponentFixture<VerCursoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerCursoScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerCursoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
