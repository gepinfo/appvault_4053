import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsogitloginComponent } from './ssogitlogin.component';

describe('SsogitloginComponent', () => {
  let component: SsogitloginComponent;
  let fixture: ComponentFixture<SsogitloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsogitloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsogitloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});