import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiPerfilScreenComponent } from './mi-perfil-screen.component';

describe('MiPerfilScreenComponent', () => {
  let component: MiPerfilScreenComponent;
  let fixture: ComponentFixture<MiPerfilScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiPerfilScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiPerfilScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
