import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavBarComponentComponent } from './main-nav-bar-component.component';

describe('MainNavBarComponentComponent', () => {
  let component: MainNavBarComponentComponent;
  let fixture: ComponentFixture<MainNavBarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainNavBarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavBarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
