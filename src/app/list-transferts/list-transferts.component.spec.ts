import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTransfertsComponent } from './list-transferts.component';

describe('ListTransfertsComponent', () => {
  let component: ListTransfertsComponent;
  let fixture: ComponentFixture<ListTransfertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTransfertsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTransfertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
