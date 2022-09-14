import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLagerComponent } from './add-lager.component';

describe('AddLagerComponent', () => {
  let component: AddLagerComponent;
  let fixture: ComponentFixture<AddLagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddLagerComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddLagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
