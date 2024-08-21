import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { CreateProcess2ModalComponent } from './components/banqueiro/create-process-2-modal/create-process-2-modal.component';
import { ResourceManagerComponent } from './components/banqueiro/resource-manager/resource-manager.component';
import { LogicApplicationPhilosophersComponent } from './components/filosofos/logic-application-philosophers/logic-application-philosophers.component';
import { QuantitySelectionComponent } from './components/filosofos/quantity-selection/quantity-selection.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ActiveProcessesTableComponent } from './components/banqueiro/active-processes-table/active-processes-table.component';
import { TableOfInactiveProcessesComponent } from './components/banqueiro/table-of-inactive-processes/table-of-inactive-processes.component';
import { MatTableModule } from '@angular/material/table';
import { RecurseControllerComponent } from './components/banqueiro/recurse-controller/recurse-controller.component';

@NgModule({
  declarations: [
    QuantitySelectionComponent,
    LogicApplicationPhilosophersComponent,
    ResourceManagerComponent,
    CreateProcess2ModalComponent,
    ActiveProcessesTableComponent,
    TableOfInactiveProcessesComponent,
    RecurseControllerComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatRadioModule,
    FormsModule,
    MatDialogModule,
    MatCheckboxModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,

  ],
  exports: [
    QuantitySelectionComponent,
    LogicApplicationPhilosophersComponent,
    ResourceManagerComponent,
    CreateProcess2ModalComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class FeatureModule { }
