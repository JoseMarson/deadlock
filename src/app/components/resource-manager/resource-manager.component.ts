import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  FormControl, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CreateProcess1ModalComponent } from './create-process-1-modal/create-process-1-modal.component';
import { CreateProcess2ModalComponent } from './create-process-2-modal/create-process-2-modal.component';


@Component({
  selector: 'app-resource-manager',
  templateUrl: './resource-manager.component.html',
  styleUrls: ['./resource-manager.component.scss']
})
export class ResourceManagerComponent {
  bankerForm!: FormGroup;
  aplicarConfiguracoesEvent = new EventEmitter<number>();
  tipoRecurso: number = 0;

  constructor(private formBuilder: FormBuilder, private modal: MatDialog ) {
    this.bankerForm = this.formBuilder.group({
      creditosDoRecurso: [1], 
      CreditosRecursoArray: this.formBuilder.array([]),
      quantidadeRecurso: [2],
      selectedOption: [''],
    });
    this.bankerForm.get('quantidadeRecurso')?.valueChanges.subscribe((newValue) => {
      this.atualizarCreditosRecursoArray(newValue);
    });
    this.atualizarCreditosRecursoArray(this.bankerForm.get('quantidadeRecurso')?.value);
  }

  atualizarCreditosRecursoArray(novaQuantidade: number): void {
    const creditosRecursoArrayControl = this.bankerForm.get('CreditosRecursoArray') as FormArray;
    console.log('Antes da atualização:', creditosRecursoArrayControl.value);


    creditosRecursoArrayControl.clear();
    
    for (let i = 0; i < novaQuantidade; i++) {
      creditosRecursoArrayControl.push(this.formBuilder.control(1));
    }
  }
  get creditosDoRecursoValue(): number | undefined {
    return this.bankerForm.get('creditosDoRecurso')?.value;
  }
  creditosDoRecursoValueArray(x: number): number {
    const creditosRecursoArrayControl = this.bankerForm.get('CreditosRecursoArray') as FormArray;
  
      const control = creditosRecursoArrayControl.at(x) as FormControl;
      return control.value;
    
  }
  get quantidadeRecursoValue(): number | undefined {
    return this.bankerForm.get('quantidadeRecurso')?.value;
  }  
  

  decrementarQuantidade(x: number, index?: number): void {
    if( x === 3 ) this.atualizarQuantidade(x, -1, index);
    else this.atualizarQuantidade(x, -1);
  }

  incrementarQuantidade(x: number, index?: number): void {
    if( x === 3 ) this.atualizarQuantidade(x, 1, index);
    this.atualizarQuantidade(x, 1);
  }

  private atualizarQuantidade(tipo: number, valor: number, index?: number): void {
    if (tipo === 1 && this.creditosDoRecursoValue && this.creditosDoRecursoValue <= 20 &&  valor+this.creditosDoRecursoValue >= 1 &&  valor+this.creditosDoRecursoValue <= 20) {
      let novoValor = this.creditosDoRecursoValue + valor;
      this.bankerForm.get('creditosDoRecurso')?.setValue(novoValor);
    }
    else if (tipo === 2 && this.quantidadeRecursoValue && (this.quantidadeRecursoValue >= 2 && this.quantidadeRecursoValue <= 4) &&  valor+this.quantidadeRecursoValue >= 2 &&  valor+this.quantidadeRecursoValue <= 4) {
      let novoValor = this.quantidadeRecursoValue + valor;
      this.bankerForm.get('quantidadeRecurso')?.setValue(novoValor);
    }
    else if (tipo === 3 && index !== undefined && this.creditosDoRecursoValueArray(index) && (this.creditosDoRecursoValueArray(index) >= 1 && this.creditosDoRecursoValueArray(index) <= 20)  &&  valor+this.creditosDoRecursoValueArray(index) >= 1 &&  valor+this.creditosDoRecursoValueArray(index) <= 20) {
      const novoValor = this.creditosDoRecursoValueArray(index) + valor;
      const creditosRecursoArrayControl = this.bankerForm.get('CreditosRecursoArray') as FormArray;

      if (creditosRecursoArrayControl && index >= 0 && index < creditosRecursoArrayControl.length) {
        const control = creditosRecursoArrayControl.at(index) as FormControl;
        control.setValue(novoValor);
        console.log('Array após a atualização:', creditosRecursoArrayControl.value);
      
      }
    }
  }
   
  

  openModal() {
    if (this.bankerForm.get('selectedOption')?.value == '1') {
      this.modal.open(CreateProcess1ModalComponent,)
    } else if (this.bankerForm.get('selectedOption')?.value == '2') {
      this.aplicarConfiguracoesEvent.emit(this.bankerForm.get('quantidadeRecurso')?.value);
      this.modal.open(CreateProcess2ModalComponent, )
    } else {
      console.log('está nulo');
      
    }
  }

  getQuantityRange() {
    return Array.from({ length: this.bankerForm.get('quantidadeRecurso')?.value }, (_, index) => index);
  }

  getCreditControl(index: number): FormControl {
    const creditosRecursoArrayControl = this.bankerForm.get('CreditosRecursoArray') as FormArray;
  
    if (creditosRecursoArrayControl && index >= 0 && index < creditosRecursoArrayControl.length) {
      return creditosRecursoArrayControl.at(index) as FormControl;
    }
  
    return new FormControl();
  }
}