import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SederhanaComponent } from './sederhana.component';

describe('SederhanaComponent', () => {
  let component: SederhanaComponent;
  let fixture: ComponentFixture<SederhanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SederhanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SederhanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
