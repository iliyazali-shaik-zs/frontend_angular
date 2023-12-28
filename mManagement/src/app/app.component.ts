import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mManagement';
  data = [
    {
      name: 'Ian Devling',
      imageUrl:
        'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg',
      area: 'Corporate',
      profileUrl: 'http://example.com/employee/profile',
      office: 'CTO office',
      tags: 'Ceo,tag1,manager,cto',
      isLoggedUser: false,
      positionName: 'Chief Executive Officer',
      id: 'O-6066',
      parentId: '',
      size: '',
    },
    {
      name: 'Davolio Nancy',
      imageUrl:
        'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg',
      area: 'Corporate',
      profileUrl: 'http://example.com/employee/profile',
      office: 'CEO office',
      tags: 'Ceo,tag1, tag2',
      isLoggedUser: false,
      positionName: 'CTO',
      id: 'O-6067',
      parentId: 'O-6066',
      size: '',
    },
    {
      name: 'Leverling Janet',
      imageUrl:
        'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/female.jpg',
      area: 'Corporate',
      profileUrl: 'http://example.com/employee/profile',
      office: 'CEO office',
      tags: 'Ceo,tag1, tag2',
      isLoggedUser: false,
      positionName: 'CTO',
      id: 'O-6068',
      parentId: 'O-6066',
      size: '',
    },
    {
      name: 'Leverling Janet',
      imageUrl:
        'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/female.jpg',
      area: 'Corporate',
      profileUrl: 'http://example.com/employee/profile',
      office: 'CEO office',
      tags: 'Ceo,tag1, tag2',
      isLoggedUser: false,
      positionName: 'CTO',
      id: 'O-6069',
      parentId: 'O-6066',
      size: '',
    },
    {
      name: 'Leverling Janet',
      imageUrl:
        'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/female.jpg',
      area: 'Corporate',
      profileUrl: 'http://example.com/employee/profile',
      office: 'CEO office',
      tags: 'Ceo,tag1, tag2',
      isLoggedUser: false,
      positionName: 'CTO',
      id: 'O-6070',
      parentId: 'O-6066',
      size: '',
    },
  ];
  ngOnInit() {
    // d3.csv(
    //   'https://raw.githubusercontent.com/bumbeishvili/sample-data/main/org.csv'
    // ).then(data => {
    let prevIndex = 0;
    // setInterval((data) => {
    //   data[prevIndex]._highlighted = false;
    //   let index = Math.floor(Math.random() * 10);
    //   prevIndex = index;
    //   data[index]._centered = true;
    //   data[index]._expanded = true;
    //   data[index]._highlighted = true;
    //   this.data = Object.assign([], this.data);
    // }, 1000);
    // });
  }
}
