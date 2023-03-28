import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalTablaComponent } from './capital-tabla.component';

describe('CapitalTablaComponent', () => {
  let component: CapitalTablaComponent;
  let fixture: ComponentFixture<CapitalTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapitalTablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapitalTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
