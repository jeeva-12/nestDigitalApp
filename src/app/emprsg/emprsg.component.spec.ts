import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprsgComponent } from './emprsg.component';

describe('EmprsgComponent', () => {
  let component: EmprsgComponent;
  let fixture: ComponentFixture<EmprsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmprsgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmprsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
