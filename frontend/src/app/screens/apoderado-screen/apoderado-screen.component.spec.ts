import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoderadoScreenComponent } from './apoderado-screen.component';

describe('ApoderadoScreenComponent', () => {
  let component: ApoderadoScreenComponent;
  let fixture: ComponentFixture<ApoderadoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApoderadoScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoderadoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
