import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedComponent } from './updated.component';

describe('UpdatedComponent', () => {
  let component: UpdatedComponent;
  let fixture: ComponentFixture<UpdatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
