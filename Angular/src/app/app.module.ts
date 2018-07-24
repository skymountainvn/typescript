import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
// import { Bai1Component } from './Components/Bai1/bai1.component';
// import { Bai2Component } from './Components/Bai1/bai2.component';
// import { Bai3Component } from './Components/Bai3/bai3.component';
// import { ParentComponent } from './Components/Output/parent.component';
// import { ChildComponent } from './Components/Output/child.component';
import { wordInfoComponent } from './Components/Bai3/word-info.component';
import { wordFormComponent } from './Components/Bai3/word-form.component'

@NgModule({
  declarations: [
    AppComponent,
    wordInfoComponent,
    wordFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
