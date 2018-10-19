import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionHeadComponent } from './opinion-head.component';

describe('OpinionHeadComponent', () => {
  let component: OpinionHeadComponent;
  let fixture: ComponentFixture<OpinionHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpinionHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpinionHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
