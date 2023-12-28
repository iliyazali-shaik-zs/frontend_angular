import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationChartRoutingModule } from './organization-chart-routing.module';
import { OrganizationTreeComponent } from './organization-tree/organization-tree.component';

@NgModule({
  declarations: [OrganizationTreeComponent],
  imports: [CommonModule, OrganizationChartRoutingModule],
  exports: [OrganizationTreeComponent],
})
export class OrganizationChartModule {}
