import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendapatanComponent } from './pendapatan.component';

describe('PendapatanComponent', () => {
  let component: PendapatanComponent;
  let fixture: ComponentFixture<PendapatanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendapatanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendapatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});