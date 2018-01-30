import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MyFormComponent } from './my-form.component';
import { createComponentFixture } from '../test-helpers';

describe('MyFormComponent', () => {
  let component: MyFormComponent;
  let fixture: ComponentFixture<MyFormComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
      ],
      declarations: [
        MyFormComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(fixture).toBeDefined();
  });
});
