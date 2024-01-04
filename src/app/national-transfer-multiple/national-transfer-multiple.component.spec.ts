import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalTransferMultipleComponent } from './national-transfer-multiple.component';

describe('NationalTransferMultipleComponent', () => {
  let component: NationalTransferMultipleComponent;
  let fixture: ComponentFixture<NationalTransferMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationalTransferMultipleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NationalTransferMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
