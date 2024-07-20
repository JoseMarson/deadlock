import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Validators } from '@angular/forms';


interface Recurso {
  controlName: string;
  label: string;
  creditosNecessariosFormControl: string;
  creditosPorSolicitacaoFormControl: string;
}

@Component({
  selector: 'app-create-process-2-modal',
  templateUrl: './create-process-2-modal.component.html',
  styleUrls: ['./create-process-2-modal.component.scss']
})
export class CreateProcess2ModalComponent implements OnInit {
  modalForm!: FormGroup;

  maxProcesses = 15;
  recursos: Recurso[] = [
    { controlName: 'recurso1', label: 'Recurso 1', creditosNecessariosFormControl: 'creditosNecessarios1', creditosPorSolicitacaoFormControl: 'creditosPorSolicitacao1' },
    { controlName: 'recurso2', label: 'Recurso 2', creditosNecessariosFormControl: 'creditosNecessarios2', creditosPorSolicitacaoFormControl: 'creditosPorSolicitacao2' },
    { controlName: 'recurso3', label: 'Recurso 3', creditosNecessariosFormControl: 'creditosNecessarios3', creditosPorSolicitacaoFormControl: 'creditosPorSolicitacao3' },
    { controlName: 'recurso4', label: 'Recurso 4', creditosNecessariosFormControl: 'creditosNecessarios4', creditosPorSolicitacaoFormControl: 'creditosPorSolicitacao4' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateProcess2ModalComponent>
  ) {}

  ngOnInit(): void {
    this.modalForm = this.formBuilder.group({
      quantidadeProcessos: new FormControl('', Validators.required),
    });

    this.recursos.forEach(recurso => {
      this.modalForm.addControl(recurso.controlName, new FormControl(false));
    });

    this.generateCreditControls();
  }

  generateCreditControls(): void {
    this.recursos.forEach(recurso => {
      if (this.modalForm.get(recurso.controlName)?.value) {
        const creditosNecessariosArray = this.formBuilder.array([1]);
        const creditosPorSolicitacaoArray = this.formBuilder.array([1]);
        this.modalForm.addControl(recurso.creditosNecessariosFormControl + 'Array', creditosNecessariosArray);
        this.modalForm.addControl(recurso.creditosPorSolicitacaoFormControl + 'Array', creditosPorSolicitacaoArray);
      }
    });
  }

  toggleCreditControls(recursoControlName: string): void {
    const isChecked = this.modalForm.get(recursoControlName)?.value;
    if (isChecked) {
      const recurso = this.recursos.find(r => r.controlName === recursoControlName);
      if (recurso) {
        const creditosNecessariosArray = this.formBuilder.array([1]);
        const creditosPorSolicitacaoArray = this.formBuilder.array([1]);
        this.modalForm.addControl(recurso.creditosNecessariosFormControl + 'Array', creditosNecessariosArray);
        this.modalForm.addControl(recurso.creditosPorSolicitacaoFormControl + 'Array', creditosPorSolicitacaoArray);
      }
    } else {
      const recurso = this.recursos.find(r => r.controlName === recursoControlName);
      if (recurso) {
        this.modalForm.removeControl(recurso.creditosNecessariosFormControl + 'Array');
        this.modalForm.removeControl(recurso.creditosPorSolicitacaoFormControl + 'Array');
      }
    }
  }

  fecharModal(): void {
    this.dialogRef.close();
  }
}
