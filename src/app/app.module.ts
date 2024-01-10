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
import { ResourceManagerComponent } from './resource-manager/resource-manager.component';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';








@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuantitySelectionComponent,
    LogicApplicationPhilosophersComponent,
    ResourceManagerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatRadioModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
