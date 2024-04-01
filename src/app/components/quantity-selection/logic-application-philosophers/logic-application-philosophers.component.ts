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
  private execucaoAtiva: boolean = false; 

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['quantidadeFilosofos'] && this.quantidadeFilosofos !== undefined) {
      console.log('Valor atualizado:', this.quantidadeFilosofos);
      this.atualizarImagemFilosofo();
      this.inicializarFilosofos();
      this.iniciarTemporizador();
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
    const randomIndex = Math.floor(Math.random() * (this.quantidadeFilosofos || 0));
    for (let i = 1; i <= (this.quantidadeFilosofos || 0); i++) {
      const estadoInicial = i === randomIndex ? 'Comendo' : 'Pensando';
      this.filosofos.push({
        nome: `Filósofo ${i}`,
        estado: estadoInicial
      });
    }
  }

  private iniciarTemporizador(): void {
    this.execucaoAtiva = true; 
    setInterval(() => {
      if (this.execucaoAtiva) {
        this.resetarEAlterarEstados();
        this.cdr.detectChanges();
      }
    }, 10000);
  }

  pausarExecucao(): void {
    this.execucaoAtiva = false; 
  }

  retomarExecucao(): void {
    this.execucaoAtiva = true; 
  }

  private resetarEAlterarEstados(): void {

    const garfosDisponiveis = new Array(this.quantidadeFilosofos || 0).fill(true);


    this.filosofos.forEach((filosofo, index) => {

      const garfoEsquerdaDisponivel = garfosDisponiveis[index];
      const garfoDireitaDisponivel = garfosDisponiveis[(index + 1) % (this.quantidadeFilosofos || 0)];

      if (filosofo.estado === 'Comendo') {
        garfosDisponiveis[index] = true;
        garfosDisponiveis[(index + 1) % (this.quantidadeFilosofos || 0)] = true;
        filosofo.estado = 'Pensando';
      } else {
        if (garfoEsquerdaDisponivel && garfoDireitaDisponivel) {
          filosofo.estado = 'Comendo';
          garfosDisponiveis[index] = false;
          garfosDisponiveis[(index + 1) % (this.quantidadeFilosofos || 0)] = false;
        } else {
          filosofo.estado = 'Aguardando';
        }
      }
    });
  }
}
