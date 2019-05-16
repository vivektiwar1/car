/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PackageplanComponent } from './packageplan.component';

describe('PackageplanComponent', () => {
  let component: PackageplanComponent;
  let fixture: ComponentFixture<PackageplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
