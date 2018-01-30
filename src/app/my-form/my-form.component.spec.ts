import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MyFormComponent } from './my-form.component';
import { createComponentFixture } from '../test-helpers';

describe('MyFormComponent', () => {
  const fixture = createComponentFixture({
    component: MyFormComponent,
    imports: [
      ReactiveFormsModule
    ]
  });

  beforeEach(() => {
    fixture.compile();
  });

  it('should compile', () => {
    expect(fixture).toMatchSnapshot();
  });
});
