import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { LogicApplicationPhilosophersComponent } from './features/components/logic-application-philosophers/logic-application-philosophers.component';
import { QuantitySelectionComponent } from './features/components/quantity-selection/quantity-selection.component';
import { CreateProcess2ModalComponent } from './features/components/create-process-2-modal/create-process-2-modal.component';
import { ResourceManagerComponent } from './features/components/resource-manager/resource-manager.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuantitySelectionComponent,
    LogicApplicationPhilosophersComponent,
    ResourceManagerComponent,
    CreateProcess2ModalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatRadioModule,
    FormsModule,
    MatDialogModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
