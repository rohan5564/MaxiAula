import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarCursosScreenComponent } from './administrar-cursos-screen.component';

describe('AdministrarCursosScreenComponent', () => {
  let component: AdministrarCursosScreenComponent;
  let fixture: ComponentFixture<AdministrarCursosScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrarCursosScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarCursosScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
