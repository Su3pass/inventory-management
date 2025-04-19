import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelpingPage } from './helping.page';

describe('HelpingPage', () => {
  let component: HelpingPage;
  let fixture: ComponentFixture<HelpingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
