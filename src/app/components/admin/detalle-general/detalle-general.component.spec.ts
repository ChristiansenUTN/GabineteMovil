import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleGeneralComponent } from './detalle-general.component';

describe('DetalleGeneralComponent', () => {
  let component: DetalleGeneralComponent;
  let fixture: ComponentFixture<DetalleGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
