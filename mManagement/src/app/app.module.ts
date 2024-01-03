import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { D3OrgChartComponent } from './d3-org-chart/d3-org-chart.component';

import { LeavePageComponent } from './pages/leave-page/leave-page.component';
import { AllLeavesComponent } from './containers/all-leaves/all-leaves.component';
import { LeaveInfoComponent } from './containers/leave-info/leave-info.component';
import { LeaveHeaderComponent } from './containers/leave-header/leave-header.component';
import { CardComponent } from './card/card.component';
import { LeaveSummaryComponent } from './leave-summary/leave-summary.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { SidebarComponent } from './sidebar/sidebar.component';
@NgModule({
  declarations: [
    AppComponent,
    D3OrgChartComponent,
    LeavePageComponent,
    AllLeavesComponent,
    LeaveInfoComponent,
    LeaveHeaderComponent,
    CardComponent,
    LeaveSummaryComponent,
    PieChartComponent,
    DatePickerComponent,
    SidebarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
