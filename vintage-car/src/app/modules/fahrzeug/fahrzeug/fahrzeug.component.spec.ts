import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahrzeugComponent } from './fahrzeug.component';

describe('FahrzeugComponent', () => {
  let component: FahrzeugComponent;
  let fixture: ComponentFixture<FahrzeugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FahrzeugComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FahrzeugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
