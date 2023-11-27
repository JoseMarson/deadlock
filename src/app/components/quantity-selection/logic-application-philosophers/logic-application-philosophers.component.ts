import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, ChangeDetectorRef  } from '@angular/core';
import { QuantitySelectionComponent } from '../quantity-selection.component';

@Component({
  selector: 'app-logic-application-philosophers',
  templateUrl: './logic-application-philosophers.component.html',
  styleUrls: ['./logic-application-philosophers.component.scss']
})
export class LogicApplicationPhilosophersComponent implements OnChanges {
  @Input() quantidadeFilosofos?: number=3;
  //@Output() aplicarConfiguracoesEvent = new EventEmitter<number>();
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['quantidadeFilosofos']) {
      console.log('Valor atualizado:', this.quantidadeFilosofos);
      this.cdr.detectChanges(); 
    }
  }
}
