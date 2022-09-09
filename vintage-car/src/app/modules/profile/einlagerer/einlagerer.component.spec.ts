import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinlagererComponent } from './einlagerer.component';

describe('EinlagererComponent', () => {
  let component: EinlagererComponent;
  let fixture: ComponentFixture<EinlagererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EinlagererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EinlagererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
