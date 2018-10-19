import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialSubComponent } from './editorial-sub.component';

describe('EditorialSubComponent', () => {
  let component: EditorialSubComponent;
  let fixture: ComponentFixture<EditorialSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorialSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorialSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
