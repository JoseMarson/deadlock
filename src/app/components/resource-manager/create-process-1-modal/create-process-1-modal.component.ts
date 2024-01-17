import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-process-1-modal',
  templateUrl: './create-process-1-modal.component.html',
  styleUrls: ['./create-process-1-modal.component.scss']
})
export class CreateProcess1ModalComponent {
  modalForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateProcess1ModalComponent>
  ) {
    this.modalForm = this.formBuilder.group({
      creditosNecessarios: [1],
      creditoPorSolicitacao: [1],
    });
  }

  fecharModal(): void {
    this.dialogRef.close();
  }

  decrementarQuantidade(x: number): void {
    this.atualizarQuantidade(x, -1);
  }

  incrementarQuantidade(x: number): void {
    this.atualizarQuantidade(x, 1);
  }

  private atualizarQuantidade(tipo: number, valor: number): void {
    const campo = tipo === 1 ? 'creditosNecessarios' : 'creditoPorSolicitacao';
    let quantidadeAtual = this.modalForm.value[campo] || 0;

    if (quantidadeAtual + valor >= 1 && quantidadeAtual + valor <= 20) {
      quantidadeAtual += valor;
      this.modalForm.patchValue({ [campo]: quantidadeAtual });
    }
  }
}
