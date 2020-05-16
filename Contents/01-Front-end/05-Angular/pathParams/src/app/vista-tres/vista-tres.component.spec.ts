import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaTresComponent } from './vista-tres.component';

describe('VistaTresComponent', () => {
  let component: VistaTresComponent;
  let fixture: ComponentFixture<VistaTresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaTresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
