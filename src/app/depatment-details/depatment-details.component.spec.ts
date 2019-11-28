import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepatmentDetailsComponent } from './depatment-details.component';

describe('DepatmentDetailsComponent', () => {
  let component: DepatmentDetailsComponent;
  let fixture: ComponentFixture<DepatmentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepatmentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepatmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
