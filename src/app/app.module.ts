import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuanLySanPhamModule } from './quan-ly-san-pham/quan-ly-san-pham.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    QuanLySanPhamModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
