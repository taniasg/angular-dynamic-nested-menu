import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicNestedMenuComponent } from './dynamic-nested-menu.component';

describe('DynamicNestedMenuComponent', () => {
  let component: DynamicNestedMenuComponent;
  let fixture: ComponentFixture<DynamicNestedMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicNestedMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicNestedMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
