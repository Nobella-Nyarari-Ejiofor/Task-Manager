import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { TaskItemComponent } from './component/task-item/task-item.component';
import { TaskFormComponent } from './component/task-form/task-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskItemComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
