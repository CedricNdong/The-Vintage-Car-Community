import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFahrzeugComponent } from './add-fahrzeug.component';

describe('AddFahrzeugComponent', () => {
  let component: AddFahrzeugComponent;
  let fixture: ComponentFixture<AddFahrzeugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFahrzeugComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFahrzeugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
