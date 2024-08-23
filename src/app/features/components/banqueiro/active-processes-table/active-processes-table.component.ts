import { Component, OnInit } from '@angular/core';
import { Process } from 'src/app/shared/interface/processInterface';
import { BankerService } from 'src/app/shared/services/banker.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-active-processes-table',
  templateUrl: './active-processes-table.component.html',
  styleUrls: ['./active-processes-table.component.scss']
})
export class ActiveProcessesTableComponent implements OnInit {
  processes: Process[] = [];

  displayedColumns: string[] = ['codigoIdentificacao', 'creditosNecessariosRecurso1', 'status'];


  constructor(public bankerService: BankerService) {}

  ngOnInit() {
    this.bankerService.process.subscribe((data: Process[]) => {
      if (data) {
        this.processes = data;
      }
    });
  }

}
