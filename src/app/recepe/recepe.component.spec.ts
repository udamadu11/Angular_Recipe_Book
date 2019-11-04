import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepeComponent } from './recepe.component';

describe('RecepeComponent', () => {
  let component: RecepeComponent;
  let fixture: ComponentFixture<RecepeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
