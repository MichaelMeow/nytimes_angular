import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleGroupsComponent } from './article-groups.component';

describe('ArticleGroupsComponent', () => {
  let component: ArticleGroupsComponent;
  let fixture: ComponentFixture<ArticleGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
