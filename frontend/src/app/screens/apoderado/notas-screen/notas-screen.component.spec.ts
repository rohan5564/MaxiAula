import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasScreenComponent } from './notas-screen.component';

describe('NotasScreenComponent', () => {
  let component: NotasScreenComponent;
  let fixture: ComponentFixture<NotasScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotasScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
