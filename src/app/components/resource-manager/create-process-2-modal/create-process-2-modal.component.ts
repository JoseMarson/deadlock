import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-process-2-modal',
  templateUrl: './create-process-2-modal.component.html',
  styleUrls: ['./create-process-2-modal.component.scss']
})
export class CreateProcess2ModalComponent {
  modalForm: FormGroup;

  quantidadeRecurso: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateProcess2ModalComponent>,
    @Inject(MAT_DIALOG_DATA) data: any

  ) {
    this.quantidadeRecurso = data.quantidadeRecurso;
    this.modalForm = this.formBuilder.group({
      creditosNecessariosArray: this.formBuilder.array([1]),
      quantidadeCreditoArray: this.formBuilder.array([1]),
    });
  }

  getQuantidadeDeRecusosArray() {
    return Array.from({ length: this.quantidadeRecurso }, (_, index) => index );
  }

  creditosNecessariosArray(x: number): number {
    const creditosNecessariosArrayControl = this.modalForm.get('creditosNecessariosArray') as FormArray;
  
      const control = creditosNecessariosArrayControl.at(x) as FormControl;
      return control.value;
    
  }
  quantidadeCreditoArray(x: number): number{
    const quantidadeCreditoArrayControl = this.modalForm.get('quantidadeCreditoArray') as FormArray;
  
      const control = quantidadeCreditoArrayControl.at(x) as FormControl;
      return control.value;
  }

  fecharModal(): void {
    this.dialogRef.close();
  }

  decrementarQuantidade(x: number,  index: number): void {
    console.log('decrementarQuantidade - x:', x, 'index:', index);
    this.atualizarQuantidade(x, -1, index);
  }

  incrementarQuantidade(x: number,  index: number): void {
    console.log('incrementarQuantidade - x:', x, 'index:', index);
    this.atualizarQuantidade(x, 1, index);
  }

  private atualizarQuantidade(tipo: number, valor: number,  index: number): void {
    const creditosNecessariosArrayControl = this.modalForm.get('creditosNecessariosArray') as FormArray;
    const quantidadeCreditoArrayControl = this.modalForm.get('quantidadeCreditoArray') as FormArray;

    if (index >= creditosNecessariosArrayControl.length) {
      creditosNecessariosArrayControl.push(this.formBuilder.control(1));
      quantidadeCreditoArrayControl.push(this.formBuilder.control(1));
    }

    const novoValor = this.creditosNecessariosArray(index) + valor;
    const novoValor2 = this.quantidadeCreditoArray(index) + valor;
      
    if (tipo === 1 && this.creditosNecessariosArray(index) + valor >= 1 && this.creditosNecessariosArray(index) + valor <= 20) {
      const control = creditosNecessariosArrayControl.at(index) as FormControl;
      control.setValue(novoValor);
      console.log('novo valor:', novoValor, 'index: ', index);
    }
    else if(tipo === 2 && this.quantidadeCreditoArray(index) + valor >= 1 && this.quantidadeCreditoArray(index) + valor <= 20){
      const control = quantidadeCreditoArrayControl.at(index) as FormControl;
      control.setValue(novoValor2);
      console.log('novo valor2:', novoValor2, 'index: ', index);
    }
  }
}
