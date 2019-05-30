import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalDetails1Page } from './rental-details1.page';

describe('RentalDetails1Page', () => {
  let component: RentalDetails1Page;
  let fixture: ComponentFixture<RentalDetails1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalDetails1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalDetails1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
