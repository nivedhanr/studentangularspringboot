import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { SearchComponent } from './search/search.component';
const  myroute:Routes=[
  {
    path:"",
    component:AddstudentComponent
  },
  {
    path:"view",
    component:ViewstudentComponent
  },
  {
    path:"search",
    component:SearchComponent
  }

]
@NgModule({
  declarations: [
    AppComponent,
    AddstudentComponent,
    ViewstudentComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
