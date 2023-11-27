// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-quantity-selection (aplicarConfiguracoesEvent)="aplicarConfiguracoes($event)"></app-quantity-selection>
    <app-logic-application-philosophers [quantidadeFilosofos]="quantidadeFilosofos"></app-logic-application-philosophers>
  `,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'deadlock';
  quantidadeFilosofos: number = 3;

  aplicarConfiguracoes(quantidadeFilosofos: number): void {
    this.quantidadeFilosofos = quantidadeFilosofos;
  }
}
