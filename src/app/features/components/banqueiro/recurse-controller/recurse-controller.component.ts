import { Component } from '@angular/core';
import { BankerService } from 'src/app/shared/services/banker.service';

@Component({
  selector: 'app-recurse-controller',
  templateUrl: './recurse-controller.component.html',
  styleUrls: ['./recurse-controller.component.scss']
})
export class RecurseControllerComponent {

  constructor(private bankerService : BankerService) { }
  quantidadeDeRecursos: number = 1;
  recursos: any= null;
 

  ngOnInit() {
    this.bankerService.currentCreatedRecurses$.subscribe(valor => {
      if (valor != null) {
        this.recursos = valor.creditosRecursoArray;
        this.quantidadeDeRecursos = valor.quantidadeRecurso; 
      }
    });
  }
}
