import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassNumComponent } from './class-num.component';

describe('ClassNumComponent', () => {
  let component: ClassNumComponent;
  let fixture: ComponentFixture<ClassNumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassNumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
