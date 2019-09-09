/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TopicContentComponent } from './topic-content.component';

describe('TopicContentComponent', () => {
  let component: TopicContentComponent;
  let fixture: ComponentFixture<TopicContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
