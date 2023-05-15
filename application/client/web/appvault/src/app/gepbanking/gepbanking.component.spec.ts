import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GepBankingComponent } from './gepbanking.component';

describe('GepBankingComponent', () => {
  let component: GepBankingComponent;
  let fixture: ComponentFixture<GepBankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GepBankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GepBankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
