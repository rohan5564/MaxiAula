import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarUsuariosScreenComponent } from './administrar-usuarios-screen.component';

describe('AdministrarUsuariosScreenComponent', () => {
  let component: AdministrarUsuariosScreenComponent;
  let fixture: ComponentFixture<AdministrarUsuariosScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrarUsuariosScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarUsuariosScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
