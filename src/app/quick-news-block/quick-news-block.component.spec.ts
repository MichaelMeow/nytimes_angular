import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickNewsBlockComponent } from './quick-news-block.component';

describe('QuickNewsBlockComponent', () => {
  let component: QuickNewsBlockComponent;
  let fixture: ComponentFixture<QuickNewsBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickNewsBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickNewsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
