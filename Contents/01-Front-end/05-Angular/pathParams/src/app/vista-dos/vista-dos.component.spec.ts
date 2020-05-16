import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaDosComponent } from './vista-dos.component';

describe('VistaDosComponent', () => {
  let component: VistaDosComponent;
  let fixture: ComponentFixture<VistaDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
