import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisNotasScreenComponent } from './mis-notas-screen.component';

describe('MisNotasScreenComponent', () => {
  let component: MisNotasScreenComponent;
  let fixture: ComponentFixture<MisNotasScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisNotasScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisNotasScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
