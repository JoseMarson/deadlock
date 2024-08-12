import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AppComponent } from '../app.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
   MatIconModule,
   CommonModule,
   RouterModule,
   BrowserAnimationsModule,
   MatButtonModule
   
  ],
  exports: [
    HeaderComponent, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class CoreModule { }
