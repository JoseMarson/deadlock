import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  FormControl } from '@angular/forms';


@Component({
  selector: 'app-resource-manager',
  templateUrl: './resource-manager.component.html',
  styleUrls: ['./resource-manager.component.scss']
})
export class ResourceManagerComponent {
  bankerForm!: FormGroup;
  selectedOption: string = ''; 
  creditosDoRecurso?: number;


  constructor(private formBuilder: FormBuilder) {
    this.bankerForm = this.formBuilder.group({
      creditosDoRecurso: [1],  // Set initial value to 1
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
  }

  incrementarQuantidade() {
    let quantidadeAtual = this.bankerForm.value.creditosDoRecurso;
    if (quantidadeAtual < 20) {
      quantidadeAtual++;
      this.bankerForm.patchValue({creditosDoRecurso: quantidadeAtual });
    }
  }
}
