import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickNewsComponent } from './quick-news.component';

describe('QuickNewsComponent', () => {
  let component: QuickNewsComponent;
  let fixture: ComponentFixture<QuickNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
