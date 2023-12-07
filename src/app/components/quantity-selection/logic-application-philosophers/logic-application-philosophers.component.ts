
import { Component, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';

  @Component({
    selector: 'app-logic-application-philosophers',
    templateUrl: './logic-application-philosophers.component.html',
    styleUrls: ['./logic-application-philosophers.component.scss']
  })
  export class LogicApplicationPhilosophersComponent implements OnChanges {
    @Input() quantidadeFilosofos?: number = 3;
    imagemFilosofo: string = '../../../assests/images/mesa3.png.png';
    constructor (private cdr: ChangeDetectorRef) {}
  
    ngOnChanges(changes: SimpleChanges): void {
      if (changes['quantidadeFilosofos']) {
        console.log('Valor atualizado:', this.quantidadeFilosofos);
        this.atualizarImagemFilosofo();
        this.cdr.detectChanges();
      }
    }

  private atualizarImagemFilosofo(): void {
    if (this.quantidadeFilosofos == 3) {
      this.imagemFilosofo = '../../../assets/images/mesa3.png';
    } else if (this.quantidadeFilosofos == 4) {
      this.imagemFilosofo = '../../../assets/images/mesa4.png';
    } else if (this.quantidadeFilosofos == 5) {
      this.imagemFilosofo = '../../../assets/images/mesa5.png';
    } else if (this.quantidadeFilosofos == 6) {
      this.imagemFilosofo = '../../../assets/images/mesa6.png';
    } else if (this.quantidadeFilosofos == 7) {
      this.imagemFilosofo = '../../../assets/images/mesa7.png';
    } 
  }
}
