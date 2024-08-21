import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurseControllerComponent } from './recurse-controller.component';

describe('RecurseControllerComponent', () => {
  let component: RecurseControllerComponent;
  let fixture: ComponentFixture<RecurseControllerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecurseControllerComponent]
    });
    fixture = TestBed.createComponent(RecurseControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
