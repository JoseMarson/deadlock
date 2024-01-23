import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-process-2-modal',
  templateUrl: './create-process-2-modal.component.html',
  styleUrls: ['./create-process-2-modal.component.scss']
})
export class CreateProcess2ModalComponent {
  modalForm: FormGroup;

  @Input() quantidadeRecurso?: number = 2;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateProcess2ModalComponent>
  ) {
    this.modalForm = this.formBuilder.group({
      creditosNecessarios: [1],
      creditoPorSolicitacao: [1],
    });
  }

  getQuantidadeDeRecusosArray(){
    return Array(this.quantidadeRecurso).fill(0);
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
