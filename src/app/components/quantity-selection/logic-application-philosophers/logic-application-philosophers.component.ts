import { Component, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-logic-application-philosophers',
  templateUrl: './logic-application-philosophers.component.html',
  styleUrls: ['./logic-application-philosophers.component.scss']
})
export class LogicApplicationPhilosophersComponent implements OnChanges {
  @Input() quantidadeFilosofos?: number = 3;
  imagemFilosofo: string = './assets/images/mesa3.png';
  filosofos: any[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['quantidadeFilosofos'] && this.quantidadeFilosofos !== undefined) {
      console.log('Valor atualizado:', this.quantidadeFilosofos);
      this.atualizarImagemFilosofo();
      this.inicializarFilosofos();
      this.cdr.detectChanges();
    }
  }

  private atualizarImagemFilosofo(): void {
    if (this.quantidadeFilosofos && this.quantidadeFilosofos >= 3 && this.quantidadeFilosofos <= 7) {
      this.imagemFilosofo = `./assets/images/mesa${this.quantidadeFilosofos}.png`;
    }
  }

  private inicializarFilosofos(): void {
    this.filosofos = [];
    for (let i = 1; i <= (this.quantidadeFilosofos || 0); i++) {
      this.filosofos.push({
        nome: `Filósofo ${i}`,
        estado: 'Pensando'
      });
    }
  }
}
