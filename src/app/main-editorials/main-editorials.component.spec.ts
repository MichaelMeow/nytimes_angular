import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEditorialsComponent } from './main-editorials.component';

describe('MainEditorialsComponent', () => {
  let component: MainEditorialsComponent;
  let fixture: ComponentFixture<MainEditorialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainEditorialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainEditorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
