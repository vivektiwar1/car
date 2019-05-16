/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PackageplanpriceComponent } from './packageplanprice.component';

describe('PackageplanpriceComponent', () => {
  let component: PackageplanpriceComponent;
  let fixture: ComponentFixture<PackageplanpriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageplanpriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageplanpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
