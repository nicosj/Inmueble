import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmuebleListComponent } from './inmueble-list.component';

describe('InmuebleListComponent', () => {
  let component: InmuebleListComponent;
  let fixture: ComponentFixture<InmuebleListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InmuebleListComponent]
    });
    fixture = TestBed.createComponent(InmuebleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
