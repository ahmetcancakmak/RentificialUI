import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import { DetailsComponent } from './details/details.component';
import { DxButtonModule, DxChartModule, DxSelectBoxModule,DxPieChartModule } from 'devextreme-angular';
import { Service } from './app.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    DxChartModule,
    DxSelectBoxModule,
    DxPieChartModule
  ],
  providers: [Service,DetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }