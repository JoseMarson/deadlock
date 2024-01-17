import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuantitySelectionComponent } from './components/quantity-selection/quantity-selection.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { LogicApplicationPhilosophersComponent } from './components/quantity-selection/logic-application-philosophers/logic-application-philosophers.component';
import { ResourceManagerComponent } from './components/resource-manager/resource-manager.component';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateProcess1ModalComponent } from './components/resource-manager/create-process-1-modal/create-process-1-modal.component';
import { CreateProcess2ModalComponent } from './components/resource-manager/create-process-2-modal/create-process-2-modal.component';








@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuantitySelectionComponent,
    LogicApplicationPhilosophersComponent,
    ResourceManagerComponent,
    CreateProcess1ModalComponent,
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
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
