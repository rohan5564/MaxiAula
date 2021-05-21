import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorScreenComponent } from './profesor-screen.component';

describe('ProfesorScreenComponent', () => {
  let component: ProfesorScreenComponent;
  let fixture: ComponentFixture<ProfesorScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesorScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
