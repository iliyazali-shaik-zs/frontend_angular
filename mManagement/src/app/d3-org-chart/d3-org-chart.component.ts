import {
  OnChanges,
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
} from '@angular/core';

import { OrgChart } from 'd3-org-chart';

@Component({
  selector: 'app-d3-org-chart',
  templateUrl: './d3-org-chart.component.html',
  styleUrls: ['./d3-org-chart.component.scss'],
})
export class D3OrgChartComponent implements OnInit, OnChanges {
  @ViewChild('chartContainer') chartContainer: ElementRef;
  @Input() data: any[];
  chart: any;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    if (!this.chart) {
      this.chart = new OrgChart();
    }
    this.updateChart();
  }

  ngOnChanges() {
    this.updateChart();
  }
  updateChart() {
    if (!this.data) {
      return;
    }
    if (!this.chart) {
      return;
    }
    this.chart
      .data(this.data)
      .container(this.chartContainer.nativeElement)
      .svgWidth(window.innerWidth)
      .nodeHeight((d: any) => 110)
      .nodeWidth((d: any) => 200)
      .compactMarginBetween((d: any) => 65)
      .compactMarginPair((d: any) => 100)
      .siblingsMargin((d: any) => 100)
      .childrenMargin((d: any) => 75)
      .setActiveNodeCentered(true)
      .compact(true)
      .initialZoom(0.7)
      // .nodeContent((d: any) => {
      //   return `<div
      //   style="
      //     border: 1px solid black;
      //     width: 200px;
      //     height: 80px;
      //     display: flex;
      //     flex-direction: row;
      //     align-items: center;
      //     gap: 16px;
      //     padding: 16px;
      //   "
      // >
      //   <img
      //     src="${d.data.img}"
      //     style="height: ${d.data.imgHeight}; width: ${d.data.imgWidth}; border-radius: 50%"
      //   />
      //   <div style="display: flex; flex-direction: column; gap: 4px">
      //     <div>${d.data.name}</div>
      //     <div>${d.data.positionName}</div>
      //     <div style="background-color: #36404a;
      //     border-radius: 10px;
      //     color: #e2e4e7;
      //     font-size: 10px;
      //     font-weight: 400;
      //     height: 25px;
      //     line-height: 25px;
      //     margin-bottom:5px;
      //     margin-left: 10px;
      //     text-align: center;
      //     width: 48px">${d.data.size}</div>
      //   </div>
      // </div>
      // `;
      // })
      .nodeContent((d: any) => {
        return `
                <div style="padding-top:30px;background-color:none;margin-left:1px;height:${
                  d.height
                }px;border-radius:2px;overflow:visible">
                  <div style="height:${
                    d.height - 32
                  }px;padding-top:0px;background-color:white;border:1px solid lightgray;">

                    <img src=" ${
                      d.data.img
                    }" style="margin-top:-30px;margin-left:${
          d.width / 2 - 30
        }px;border-radius:100px;width:60px;height:60px;" />
                   <div style="margin-top:-30px;background-color:#3AB6E3;height:10px;width:${
                     d.width - 2
                   }px;border-radius:1px"></div>

                   <div style="padding:20px; padding-top:35px;text-align:center">
                       <div style="color:#111672;font-size:16px;font-weight:bold"> ${
                         d.data.name
                       } </div>
                       <div style="color:#404040;font-size:16px;margin-top:4px"> ${
                         d.data.positionName
                       } </div>
                   </div>
                   <div style="display:flex;justify-content:space-between;padding-left:15px;padding-right:15px;">
                     <div > Manages:  ${d.data._directSubordinates} 👤</div>
                     <div > Oversees: ${d.data._totalSubordinates} 👤</div>
                   </div>
                  </div>
          </div>
      `;
      })
      .nodeWidth((d: any) => 250)
      .initialZoom(0.7)
      .nodeHeight((d: any) => 175)
      .childrenMargin((d: any) => 40)
      .compactMarginBetween((d: any) => 15)
      .compactMarginPair((d: any) => 80)
      .render();
  }
}
