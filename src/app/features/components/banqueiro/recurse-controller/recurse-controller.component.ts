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
  recursos: any[] = [];
 

  ngOnInit() {
    this.bankerService.currentCreatedRecurses$.subscribe(valor => {
      this.recursos = valor.length > 0 ? valor : [{ id: 1, creditosDisponiveis: 1 }];
      this.quantidadeDeRecursos = this.recursos.length; 
    });
  
    console.log('Recursos iniciais:', this.recursos);
  }
}
