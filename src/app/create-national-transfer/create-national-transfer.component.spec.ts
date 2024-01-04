import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNationalTransferComponent } from './create-national-transfer.component';

describe('CreateNationalTransferComponent', () => {
  let component: CreateNationalTransferComponent;
  let fixture: ComponentFixture<CreateNationalTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNationalTransferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNationalTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
