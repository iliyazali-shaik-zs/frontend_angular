import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrganizationChartModule } from './organization-chart/organization-chart.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, OrganizationChartModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
