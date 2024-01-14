import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProcess1ModalComponent } from './create-process-1-modal.component';

describe('CreateProcess1ModalComponent', () => {
  let component: CreateProcess1ModalComponent;
  let fixture: ComponentFixture<CreateProcess1ModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateProcess1ModalComponent]
    });
    fixture = TestBed.createComponent(CreateProcess1ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
