import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveProcessesTableComponent } from './active-processes-table.component';

describe('ActiveProcessesTableComponent', () => {
  let component: ActiveProcessesTableComponent;
  let fixture: ComponentFixture<ActiveProcessesTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveProcessesTableComponent]
    });
    fixture = TestBed.createComponent(ActiveProcessesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
