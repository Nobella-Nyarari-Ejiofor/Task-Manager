import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { TaskItemComponent } from './component/task-item/task-item.component';
import { TaskFormComponent } from './component/task-form/task-form.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './component/about/about.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { DonetasksComponent } from './component/donetasks/donetasks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskItemComponent,
    TaskFormComponent,
    AboutComponent,
    NavbarComponent,
    NotFoundComponent,
    DonetasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
