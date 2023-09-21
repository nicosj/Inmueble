import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmuebleNuevoComponent } from './inmueble-nuevo.component';

describe('InmuebleNuevoComponent', () => {
  let component: InmuebleNuevoComponent;
  let fixture: ComponentFixture<InmuebleNuevoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InmuebleNuevoComponent]
    });
    fixture = TestBed.createComponent(InmuebleNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
