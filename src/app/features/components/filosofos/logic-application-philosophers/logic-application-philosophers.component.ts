import { Component, Input, OnChanges, SimpleChanges, ChangeDetectorRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-logic-application-philosophers',
  templateUrl: './logic-application-philosophers.component.html',
  styleUrls: ['./logic-application-philosophers.component.scss']
})
export class LogicApplicationPhilosophersComponent implements OnChanges, OnDestroy {
  @Input() quantidadeFilosofos?: number = 3;
  imagemFilosofo: string = './assets/images/mesa3.png';
  filosofos: any[] = [];
  private execucaoAtiva: boolean = false;
  private intervalId: any = null;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    const quantidadeFilosofos = this.quantidadeFilosofos ?? 0;
    if (changes['quantidadeFilosofos'] && quantidadeFilosofos !== undefined) {
      this.atualizarImagemFilosofo();
      this.inicializarFilosofos();
      this.iniciarTemporizador();
      this.cdr.detectChanges();
    }
  }

  ngOnDestroy(): void {
    this.clearTemporizador();
  }

  private atualizarImagemFilosofo(): void {
    if (this.quantidadeFilosofos && this.quantidadeFilosofos >= 3 && this.quantidadeFilosofos <= 7) {
      this.imagemFilosofo = `./assets/images/mesa${this.quantidadeFilosofos}.png`;
    }
  }

  private inicializarFilosofos(): void {
    this.filosofos = [];
    const garfosDisponiveis = new Array(this.quantidadeFilosofos || 0).fill(true);

    for (let i = 0; i < (this.quantidadeFilosofos || 0); i++) {
      if (!(garfosDisponiveis[i] && garfosDisponiveis[(i + 1) % (this.quantidadeFilosofos || 0)])) {
        this.filosofos.push({
          nome: `Filósofo ${i + 1}`,
          estado: 'Aguardando'
        });
      } else {
        this.filosofos.push({
          nome: `Filósofo ${i + 1}`,
          estado: 'Comendo'
        });
        garfosDisponiveis[i] = false;
        garfosDisponiveis[(i + 1) % (this.quantidadeFilosofos || 0)] = false;
      }
    }
  }

  private iniciarTemporizador(): void {
    this.clearTemporizador();
    this.execucaoAtiva = true;
    this.intervalId = setInterval(() => {
      if (this.execucaoAtiva) {
        this.resetarEAlterarEstados();
        this.cdr.detectChanges();
      }
    }, 7000);
  }

  private clearTemporizador(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
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
      const garfoEsquerdaIndex = index;
      const garfoDireitaIndex = (index + 1) % (this.quantidadeFilosofos || 0);

      if (filosofo.estado === 'Comendo' && garfoEsquerdaDisponivel && garfoDireitaDisponivel) {
        garfosDisponiveis[garfoEsquerdaIndex] = true;
        garfosDisponiveis[garfoDireitaIndex] = true;
        filosofo.estado = 'Pensando';
      } else {
        if (filosofo.estado === 'Aguardando' && garfoEsquerdaDisponivel && garfoDireitaDisponivel) {
          filosofo.estado = 'Comendo';
          garfosDisponiveis[garfoEsquerdaIndex] = false;
          garfosDisponiveis[garfoDireitaIndex] = false;
        } else {
          if (!garfoEsquerdaDisponivel && !garfoDireitaDisponivel) {
            filosofo.estado = 'Pensando';
          } else {
            filosofo.estado = 'Aguardando';
          }
        }
      }
    });
  }

  getStyle(index: number): any {
    const angle = (2 * Math.PI / (this.quantidadeFilosofos || 1)) * index - (Math.PI / 2); 
    const radius = 150; 
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return {
      transform: `translate(${x}px, ${y}px)`
    };
  }

  getFilosofoImage(estado: string): string {
    switch (estado) {
      case 'Comendo':
        return '../../../../assets/images/comendo.png';
      case 'Pensando':
        return '../../../../assets/images/pensando.png';
      default:
        return '../../../../assets/images/aguardando.png';
    }
  }
}
