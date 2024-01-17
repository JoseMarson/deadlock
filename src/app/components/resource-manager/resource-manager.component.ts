import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  FormControl } from '@angular/forms';
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
      quantidadeRecurso: [2],
      selectedOption: [''],
    });
  }

  get creditosDoRecursoValue(): number | undefined {
    return this.bankerForm.get('creditosDoRecurso')?.value;
  }

  decrementarQuantidade() {
    let quantidadeAtual = this.bankerForm.value.creditosDoRecurso;
    if (quantidadeAtual > 1) {
      quantidadeAtual--;
      this.bankerForm.patchValue({ creditosDoRecurso: quantidadeAtual });
    }
    quantidadeAtual = this.bankerForm.value.quantidadeRecurso;
    if (quantidadeAtual > 2) {
      quantidadeAtual--;
      this.bankerForm.patchValue({ quantidadeRecurso: quantidadeAtual });
    }
  }

  incrementarQuantidade() {
    let quantidadeAtual = this.bankerForm.value.creditosDoRecurso;
    if (quantidadeAtual < 20) {
      quantidadeAtual++;
      this.bankerForm.patchValue({creditosDoRecurso: quantidadeAtual });
    }
    quantidadeAtual = this.bankerForm.value.quantidadeRecurso;
    if (quantidadeAtual < 4) {
      quantidadeAtual++;
      this.bankerForm.patchValue({quantidadeRecurso: quantidadeAtual });
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

  getCreditControl(index: number) {
    return new FormControl(); // Você pode adicionar lógica ou validações adicionais se necessário
  }
}