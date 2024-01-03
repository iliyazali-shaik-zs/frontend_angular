import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LeavePageComponent } from './pages/leave-page/leave-page.component';
import { D3OrgChartComponent } from './d3-org-chart/d3-org-chart.component';

const routes: Routes = [
  {
    path: 'leaves',
    component: LeavePageComponent,
  },
  {
    path: 'orgChart',
    component: D3OrgChartComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
