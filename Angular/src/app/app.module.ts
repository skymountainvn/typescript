import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { Bai1Component } from './Components/Bai1/bai1.component';
import { Bai2Component } from './Components/Bai1/bai2.component';
import { Bai3Component } from './Components/Bai1/bai3.component';
import { ParentComponent } from './Components/Output/parent.component';
import { ChildComponent } from './Components/Output/child.component';
@NgModule({
  declarations: [
    AppComponent,
    Bai1Component,
    Bai2Component,
    Bai3Component,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
