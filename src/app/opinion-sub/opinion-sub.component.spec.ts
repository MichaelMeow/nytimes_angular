import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionSubComponent } from './opinion-sub.component';

describe('OpinionSubComponent', () => {
  let component: OpinionSubComponent;
  let fixture: ComponentFixture<OpinionSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpinionSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpinionSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
