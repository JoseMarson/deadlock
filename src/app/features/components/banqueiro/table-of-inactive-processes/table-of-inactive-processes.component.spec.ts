import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOfInactiveProcessesComponent } from './table-of-inactive-processes.component';

describe('TableOfInactiveProcessesComponent', () => {
  let component: TableOfInactiveProcessesComponent;
  let fixture: ComponentFixture<TableOfInactiveProcessesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableOfInactiveProcessesComponent]
    });
    fixture = TestBed.createComponent(TableOfInactiveProcessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
