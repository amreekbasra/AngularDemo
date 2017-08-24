import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
// <-- NgModel lives here
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule.forRoot()],
  // <-- import the FormsModule before binding with [(ngModel)]
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
