import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

interface Recurso {
  controlName: string;
  label: string;
  creditosFormControl: string;
}

@Component({
  selector: 'app-create-process-2-modal',
  templateUrl: './create-process-2-modal.component.html',
  styleUrls: ['./create-process-2-modal.component.scss']
})
export class CreateProcess2ModalComponent {

  modalForm: FormGroup;
  maxProcesses = 15;
  recursos: Recurso[] = [
    { controlName: 'recurso1', label: 'Recurso 1', creditosFormControl: 'creditosNecessarios1' },
    { controlName: 'recurso2', label: 'Recurso 2', creditosFormControl: 'creditosNecessarios2' },
    { controlName: 'recurso3', label: 'Recurso 3', creditosFormControl: 'creditosNecessarios3' },
    { controlName: 'recurso4', label: 'Recurso 4', creditosFormControl: 'creditosNecessarios4' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateProcess2ModalComponent>
  ) {
    this.modalForm = this.formBuilder.group({
      novoCampo: new FormControl(''),
      creditosNecessariosArray: this.formBuilder.array([1]),
      quantidadeCreditoArray: this.formBuilder.array([1]), 
    });

    
    this.recursos.forEach(recurso => {
      this.modalForm.addControl(recurso.controlName, new FormControl(false));
      this.modalForm.addControl(recurso.creditosFormControl + 'Array', this.formBuilder.array([1]));
    });

    this.recursos.forEach(recurso => {
      this.modalForm.get(recurso.controlName)?.valueChanges.subscribe(value => {
        if (value) {
          this.modalForm.addControl(recurso.creditosFormControl + 'Array', this.formBuilder.array([1]));
        } else {
          this.modalForm.removeControl(recurso.creditosFormControl + 'Array');
        }
      });
    });
  }


  fecharModal(): void {
    this.dialogRef.close();
  }

  
}
