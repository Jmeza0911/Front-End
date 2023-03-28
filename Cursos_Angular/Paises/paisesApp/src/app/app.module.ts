import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PaisModule } from './pais/pais.module';
import { SharedModule } from './shared/shared.module';
import { ApproutingModule } from './shared/app-routing.module';
import { CapitalTablaComponent } from './components/capital-tabla/capital-tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    CapitalTablaComponent
  ],
  imports: [
    BrowserModule,
    ApproutingModule,
    HttpClientModule,
    PaisModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
