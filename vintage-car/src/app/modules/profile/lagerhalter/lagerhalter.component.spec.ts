import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LagerhalterComponent } from './lagerhalter.component';

describe('LagerhalterComponent', () => {
  let component: LagerhalterComponent;
  let fixture: ComponentFixture<LagerhalterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LagerhalterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LagerhalterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
