import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Validators } from '@angular/forms';
import { BankerService } from 'src/app/shared/services/banker.service';
import { Process } from 'src/app/shared/interface/processInterface';


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
 quantidadeRecurso: number = 0 ;
 quantidadeProcessosAtual = this.bankerService.processQuantity.value;
 processes:Process [] = [];

  maxProcesses = 15 - this.quantidadeProcessosAtual;
  recursos: Recurso[] = [
    { controlName: 'recurso1', label: 'Recurso 1', creditosNecessariosFormControl: 'creditosNecessarios1', creditosPorSolicitacaoFormControl: 'creditosPorSolicitacao1' },
    { controlName: 'recurso2', label: 'Recurso 2', creditosNecessariosFormControl: 'creditosNecessarios2', creditosPorSolicitacaoFormControl: 'creditosPorSolicitacao2' },
    { controlName: 'recurso3', label: 'Recurso 3', creditosNecessariosFormControl: 'creditosNecessarios3', creditosPorSolicitacaoFormControl: 'creditosPorSolicitacao3' },
    { controlName: 'recurso4', label: 'Recurso 4', creditosNecessariosFormControl: 'creditosNecessarios4', creditosPorSolicitacaoFormControl: 'creditosPorSolicitacao4' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateProcess2ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private bankerService: BankerService,
  ) {
    if (data && data.quantidadeRecurso) {
      this.quantidadeRecurso = data.quantidadeRecurso;
    }
  }

  ngOnInit(): void {
    this.bankerService.currentProcess$.subscribe();
    this.modalForm?.get('quantidadeProcessos')?.value || 0;
    this.modalForm = this.formBuilder.group({
      quantidadeProcessos: new FormControl(this.quantidadeProcessosAtual, Validators.required),
    });
    this.recursos.forEach(recurso => {
      this.modalForm.addControl(recurso.controlName, new FormControl(false));
    });

    this.generateCreditControls();
  }

  generateCreditControls(): void {
    this.recursos.forEach(recurso => {
      const creditosNecessariosControl = new FormControl(1, [Validators.required, Validators.min(1)]);
      const creditosPorSolicitacaoControl = new FormControl(1, [Validators.required, Validators.min(1)]);
      
      this.modalForm.addControl(`${recurso.creditosNecessariosFormControl}Array`, creditosNecessariosControl);
      this.modalForm.addControl(`${recurso.creditosPorSolicitacaoFormControl}Array`, creditosPorSolicitacaoControl);

      if (!this.modalForm.get(recurso.controlName)?.value) {
        creditosNecessariosControl.disable();
        creditosPorSolicitacaoControl.disable();
      }
    });
  }
  

  toggleCreditControls(recursoControlName: string): void {
    const recurso = this.recursos.find(r => r.controlName === recursoControlName);
  
    if (recurso) {
      const isChecked = this.modalForm.get(recursoControlName)?.value;
      const creditosNecessariosControl = this.modalForm.get(`${recurso.creditosNecessariosFormControl}Array`);
      const creditosPorSolicitacaoControl = this.modalForm.get(`${recurso.creditosPorSolicitacaoFormControl}Array`);
  
      if (isChecked) {
        creditosNecessariosControl?.enable();
        creditosPorSolicitacaoControl?.enable();
      } else {
        creditosNecessariosControl?.disable();
        creditosPorSolicitacaoControl?.disable();
      }
    }
  }
  

  decrementarQuantidade(){
    this.quantidadeProcessosAtual--;
    this.modalForm?.get('quantidadeProcessos')?.setValue(this.quantidadeProcessosAtual);
    this.bankerService.setTotalProcessQuantity(this.quantidadeProcessosAtual);
  }
  incrementarQuantidade(){
    this.quantidadeProcessosAtual++;
    this.modalForm?.get('quantidadeProcessos')?.setValue(this.quantidadeProcessosAtual);
    this.bankerService.setTotalProcessQuantity(this.quantidadeProcessosAtual);
  }
  
  confirmData() {
    const processosExistentes = this.bankerService.process.getValue() || [];
    const novosProcessos: Process[] = [];
    for(let i = 0; i < this.quantidadeProcessosAtual; i++){
        const creditosNecessariosRecurso1 = this.modalForm.value['creditosNecessarios1Array'] || 0;
        const creditosPorSolicitacaoRecurso1 = this.modalForm.value['creditosPorSolicitacao1Array'] || 0; 
        const creditosNecessariosRecurso2 = this.modalForm.value['creditosNecessarios2Array'] || 0;
        const creditosPorSolicitacaoRecurso2 = this.modalForm.value['creditosPorSolicitacao2Array'] || 0; 
        const creditosNecessariosRecurso3 = this.modalForm.value['creditosNecessarios3Array'] || 0;
        const creditosPorSolicitacaoRecurso3 = this.modalForm.value['creditosPorSolicitacao3Array'] || 0; 
        const creditosNecessariosRecurso4 = this.modalForm.value['creditosNecessarios4Array'] || 0;
        const creditosPorSolicitacaoRecurso4 = this.modalForm.value['creditosPorSolicitacao4Array'] || 0; 

        const novoProcesso: Process = {
            codigoIdentificacao: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,
            creditosNecessariosRecurso1,
            creditosPorSolicitacaoRecurso1,
            creditosNecessariosRecurso2,
            creditosPorSolicitacaoRecurso2,
            creditosNecessariosRecurso3,
            creditosPorSolicitacaoRecurso3,
            creditosNecessariosRecurso4,
            creditosPorSolicitacaoRecurso4,
            status: 'ativo'
        };
        novosProcessos.push(novoProcesso);
    }
    this.processes = [...processosExistentes, ...novosProcessos];
    
    this.bankerService.setProcess(this.processes);

    this.dialogRef.close();
}

  fecharModal(): void {
    this.dialogRef.close();
  }
}
