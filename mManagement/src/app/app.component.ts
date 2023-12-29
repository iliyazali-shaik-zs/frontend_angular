import { Component } from '@angular/core';
import { Node, User } from './models/org.model';
import { OrgChartService } from './service/org-chart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mManagement';
  employeeData: User[] = [];
  data: Node[];
  constructor(private readonly orgService: OrgChartService) {}
  initialNode = {
    id: 201,
    parentId: null,
    name: 'Mukesh Singh',
    positionName: 'Founder',
    img: 'https://lh3.googleusercontent.com/a/ACg8ocKogyaJ0otNwZQGLNlzvZltsoJIuszOhje5TpjU9PxCrBg=s96-c',
    size: 411,
  };

  ngOnInit() {
    this.data = [
      this.initialNode,
      ...this.orgService.getChildren(this.initialNode.id),
    ];
  }
  handleClick(id: number) {
    const temp = this.orgService.getChildren(id);
    this.data = [...this.data, ...temp];
  }
}
