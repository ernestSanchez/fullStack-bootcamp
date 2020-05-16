import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaClientesComponent } from './area-clientes.component';

describe('AreaClientesComponent', () => {
  let component: AreaClientesComponent;
  let fixture: ComponentFixture<AreaClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
