import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchsaleforceComponent } from './searchsaleforce.component';

describe('SearchsaleforceComponent', () => {
  let component: SearchsaleforceComponent;
  let fixture: ComponentFixture<SearchsaleforceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchsaleforceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchsaleforceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});