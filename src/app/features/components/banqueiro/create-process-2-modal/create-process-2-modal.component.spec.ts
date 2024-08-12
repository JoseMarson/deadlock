import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProcess2ModalComponent } from './create-process-2-modal.component';

describe('CreateProcess2ModalComponent', () => {
  let component: CreateProcess2ModalComponent;
  let fixture: ComponentFixture<CreateProcess2ModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateProcess2ModalComponent]
    });
    fixture = TestBed.createComponent(CreateProcess2ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
