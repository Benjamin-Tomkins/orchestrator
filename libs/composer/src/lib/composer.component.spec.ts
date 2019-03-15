/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComposerComponent } from './composer.component';

describe('ComposerComponent', () => {
  let component: ComposerComponent;
  let fixture: ComponentFixture<ComposerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComposerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
