import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicApplicationPhilosophersComponent } from './logic-application-philosophers.component';

describe('LogicApplicationPhilosophersComponent', () => {
  let component: LogicApplicationPhilosophersComponent;
  let fixture: ComponentFixture<LogicApplicationPhilosophersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogicApplicationPhilosophersComponent]
    });
    fixture = TestBed.createComponent(LogicApplicationPhilosophersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
