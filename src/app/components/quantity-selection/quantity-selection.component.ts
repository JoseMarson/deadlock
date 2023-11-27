import { Component, OnInit,Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-quantity-selection',
  templateUrl: './quantity-selection.component.html',
  styleUrls: ['./quantity-selection.component.scss']
})
export class QuantitySelectionComponent implements OnInit {
  filosofosForm!: FormGroup;
  aplicarConfiguracoesEvent = new EventEmitter<number>();
  quantidadeFilosofos?: number;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.filosofosForm = this.fb.group({
      quantidadeFilosofos: [3, [Validators.min(3), Validators.max(7)]],
    });
  }
  decrementarQuantidade() {
    let quantidadeAtual = this.filosofosForm.value.quantidadeFilosofos;
    if (quantidadeAtual > 3) {
      quantidadeAtual--;
      this.filosofosForm.patchValue({ quantidadeFilosofos: quantidadeAtual });
    }
  }

  incrementarQuantidade() {
    let quantidadeAtual = this.filosofosForm.value.quantidadeFilosofos;
    if (quantidadeAtual < 7) {
      quantidadeAtual++;
      this.filosofosForm.patchValue({ quantidadeFilosofos: quantidadeAtual });
    }
  }
  aplicarConfiguracoes() {
    this.quantidadeFilosofos = this.filosofosForm.value.quantidadeFilosofos;
    this.aplicarConfiguracoesEvent.emit(this.quantidadeFilosofos);
    console.log(this.quantidadeFilosofos);
    
  }
}