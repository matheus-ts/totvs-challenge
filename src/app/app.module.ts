import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FilterComponent } from './components/filter/filter.component';
import { SelectComponent } from './components/select/select.component';
import { SwitchComponent } from './components/switch/switch.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterComponent,
    SelectComponent,
    SwitchComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
