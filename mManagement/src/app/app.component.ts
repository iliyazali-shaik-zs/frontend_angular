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
      img: 'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg',
      imgWidth: '40px',
      imgHeight: '40px',
      area: 'Corporate',
      profileUrl: 'http://example.com/employee/profile',
      office: 'CTO office',
      tags: 'Ceo,tag1,manager,cto',
      isLoggedUser: false,
      positionName: 'Chief Executive Officer',
      id: 'O-6066',
      parentId: '',
      size: 30,
    },
    {
      name: 'Davolio Nancy',
      img: 'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg',
      imgWidth: '40px',
      imgHeight: '40px',
      area: 'Corporate',
      profileUrl: 'http://example.com/employee/profile',
      office: 'CEO office',
      tags: 'Ceo,tag1, tag2',
      isLoggedUser: false,
      positionName: 'CTO',
      id: 'O-6067',
      parentId: 'O-6066',
      size: 30,
    },
    {
      name: 'Leverling Janet',
      img: 'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/female.jpg',
      imgWidth: '40px',
      imgHeight: '40px',
      area: 'Corporate',
      profileUrl: 'http://example.com/employee/profile',
      office: 'CEO office',
      tags: 'Ceo,tag1, tag2',
      isLoggedUser: false,
      positionName: 'CTO',
      id: 'O-6068',
      parentId: 'O-6066',
      size: 30,
    },
    {
      name: 'Leverling Janet',
      img: 'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/female.jpg',
      imgWidth: '40px',
      imgHeight: '40px',
      area: 'Corporate',
      profileUrl: 'http://example.com/employee/profile',
      office: 'CEO office',
      tags: 'Ceo,tag1, tag2',
      isLoggedUser: false,
      positionName: 'CTO',
      id: 'O-6069',
      parentId: 'O-6066',
      size: 30,
    },
    {
      name: 'Leverling Janet',
      img: 'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/female.jpg',
      imgWidth: '40px',
      imgHeight: '40px',
      area: 'Corporate',
      profileUrl: 'http://example.com/employee/profile',
      office: 'CEO office',
      tags: 'Ceo,tag1, tag2',
      isLoggedUser: false,
      positionName: 'CTO',
      id: 'O-6070',
      parentId: 'O-6066',
      size: 30,
    },
    {
      name: 'Leverling Janet',
      img: 'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/female.jpg',
      imgWidth: '40px',
      imgHeight: '40px',
      area: 'Corporate',
      profileUrl: 'http://example.com/employee/profile',
      office: 'CEO office',
      tags: 'Ceo,tag1, tag2',
      isLoggedUser: false,
      positionName: 'CTO',
      id: 'O-6071',
      parentId: 'O-6067',
      size: 30,
    },
    {
      name: 'Fuller Andrew',
      img: 'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg',
      imgWidth: '40px',
      imgHeight: '40px',
      area: 'Corporate',
      profileUrl: 'http://example.com/employee/profile',
      office: 'CEO office',
      tags: 'Ceo,tag1, tag2',
      isLoggedUser: false,
      positionName: 'Linear Manager',
      id: 'O-6072',
      parentId: 'O-6067',
      size: 30,
    },
    {
      name: 'Peacock Margaret',
      img: 'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg',
      imgWidth: '40px',
      imgHeight: '40px',
      area: 'Corporate',
      profileUrl: 'http://example.com/employee/profile',
      office: 'CEO office',
      tags: 'Ceo,tag1, tag2',
      isLoggedUser: false,
      positionName: 'CEO',
      id: 'O-6073',
      parentId: 'O-6067',
      size: 30,
    },
    {
      name: 'Buchanan Steven',
      img: 'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg',
      imgWidth: '40px',
      imgHeight: '40px',
      area: 'Corporate',
      profileUrl: 'http://example.com/employee/profile',
      office: 'CEO office',
      tags: 'Ceo,tag1, tag2',
      isLoggedUser: false,
      positionName: 'Head of direction',
      id: 'O-6074',
      parentId: 'O-6067',
      size: 30,
    },
    {
      name: 'Suyama Michael',
      img: 'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg',
      imgWidth: '40px',
      imgHeight: '40px',
      area: 'Corporate',
      profileUrl: 'http://example.com/employee/profile',
      office: 'CEO office',
      tags: 'Ceo,tag1, tag2',
      isLoggedUser: false,
      positionName: 'Senior sales manager',
      id: 'O-6075',
      parentId: 'O-6067',
      size: 30,
    },
    {
      name: 'King Robert',
      img: 'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg',
      imgWidth: '40px',
      imgHeight: '40px',
      area: 'Corporate',
      profileUrl: 'http://example.com/employee/profile',
      office: 'CEO office',
      tags: 'Ceo,tag1, tag2',
      isLoggedUser: false,
      positionName: 'Senior Sales Manager',
      id: 'O-6076',
      parentId: 'O-6067',
      size: 30,
    },
    {
      name: 'West Adam',
      img: 'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg',
      imgWidth: '40px',
      imgHeight: '40px',
      area: 'Corporate',
      profileUrl: 'http://example.com/employee/profile',
      office: 'CEO office',
      tags: 'Ceo,tag1, tag2',
      isLoggedUser: false,
      positionName: 'CTO',
      id: 'O-6077',
      parentId: 'O-6067',
      size: 30,
    },
    {
      name: 'Charlotte Cooper',
      img: 'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg',
      imgWidth: '40px',
      imgHeight: '40px',
      area: 'Corporate',
      profileUrl: 'http://example.com/employee/profile',
      office: 'CEO office',
      tags: 'Ceo,tag1, tag2',
      isLoggedUser: false,
      positionName: 'Senior Trader',
      id: 'O-6078',
      parentId: 'O-6067',
      size: 30,
    },
    {
      name: 'Yoshi Nagase',
      img: 'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg',
      imgWidth: '40px',
      imgHeight: '40px',
      area: 'Corporate',
      profileUrl: 'http://example.com/employee/profile',
      office: 'CEO office',
      tags: 'Ceo,tag1, tag2',
      isLoggedUser: false,
      positionName: 'Head of laboratory',
      id: 'O-6079',
      parentId: 'O-6067',
      size: 30,
    },
    {
      name: 'Peter Wilson',
      img: 'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg',
      imgWidth: '40px',
      imgHeight: '40px',
      area: 'Corporate',
      profileUrl: 'http://example.com/employee/profile',
      office: 'CEO office',
      tags: 'Ceo,tag1, tag2',
      isLoggedUser: false,
      positionName: 'Head of channels',
      id: 'O-6080',
      parentId: 'O-6068',
      size: 30,
    },
    {
      name: 'Carlos Diaz',
      img: 'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg',
      imgWidth: '40px',
      imgHeight: '40px',
      area: 'Corporate',
      profileUrl: 'http://example.com/employee/profile',
      office: 'CEO office',
      tags: 'Ceo,tag1, tag2',
      isLoggedUser: false,
      positionName: 'Senior Android Developer',
      id: 'O-6081',
      parentId: 'O-6068',
      size: 30,
    },
    {
      name: 'Sven Petersen',
      img: 'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg',
      imgWidth: '40px',
      imgHeight: '40px',
      area: 'Corporate',
      profileUrl: 'http://example.com/employee/profile',
      office: 'CEO office',
      tags: 'Ceo,tag1, tag2',
      isLoggedUser: false,
      positionName: 'Senior Developer',
      id: 'O-6082',
      parentId: 'O-6068',
      size: 30,
    },
    {
      name: 'Peter Wilson',
      img: 'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg',
      imgWidth: '40px',
      imgHeight: '40px',
      area: 'Corporate',
      profileUrl: 'http://example.com/employee/profile',
      office: 'CEO office',
      tags: 'Ceo,tag1, tag2',
      isLoggedUser: false,
      positionName: 'Head of channels',
      id: 'O-6083',
      parentId: 'O-6069',
      size: 30,
    },
    {
      name: 'Carlos Diaz',
      img: 'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg',
      imgWidth: '40px',
      imgHeight: '40px',
      area: 'Corporate',
      profileUrl: 'http://example.com/employee/profile',
      office: 'CEO office',
      tags: 'Ceo,tag1, tag2',
      isLoggedUser: false,
      positionName: 'Senior Android Developer',
      id: 'O-6084',
      parentId: 'O-6069',
      size: 30,
    },
    {
      name: 'Sven Petersen',
      img: 'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg',
      imgWidth: '40px',
      imgHeight: '40px',
      area: 'Corporate',
      profileUrl: 'http://example.com/employee/profile',
      office: 'CEO office',
      tags: 'Ceo,tag1, tag2',
      isLoggedUser: false,
      positionName: 'Senior Developer',
      id: 'O-6085',
      parentId: 'O-6069',
      size: 30,
    },
    {
      name: 'Peter Wilson',
      img: 'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg',
      imgWidth: '40px',
      imgHeight: '40px',
      area: 'Corporate',
      profileUrl: 'http://example.com/employee/profile',
      office: 'CEO office',
      tags: 'Ceo,tag1, tag2',
      isLoggedUser: false,
      positionName: 'Head of channels',
      id: 'O-6086',
      parentId: 'O-6070',
      size: 30,
    },
    {
      name: 'Carlos Diaz',
      img: 'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg',
      imgWidth: '40px',
      imgHeight: '40px',
      area: 'Corporate',
      profileUrl: 'http://example.com/employee/profile',
      office: 'CEO office',
      tags: 'Ceo,tag1, tag2',
      isLoggedUser: false,
      positionName: 'Senior Android Developer',
      id: 'O-6087',
      parentId: 'O-6070',
      size: 30,
    },
    {
      name: 'Sven Petersen',
      img: 'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg',
      imgWidth: '40px',
      imgHeight: '40px',
      area: 'Corporate',
      profileUrl: 'http://example.com/employee/profile',
      office: 'CEO office',
      tags: 'Ceo,tag1, tag2',
      isLoggedUser: false,
      positionName: 'Senior Developer',
      id: 'O-6088',
      parentId: 'O-6070',
      size: 30,
    },
    {
      name: 'Leverling Janet',
      img: 'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/female.jpg',
      imgWidth: '40px',
      imgHeight: '40px',
      area: 'Corporate',
      profileUrl: 'http://example.com/employee/profile',
      office: 'CEO office',
      tags: 'Ceo,tag1, tag2',
      isLoggedUser: false,
      positionName: 'CTO',
      id: 'O-6089',
      parentId: 'O-6071',
      size: 30,
    },
    {
      name: 'Fuller Andrew',
      img: 'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg',
      imgWidth: '40px',
      imgHeight: '40px',
      area: 'Corporate',
      profileUrl: 'http://example.com/employee/profile',
      office: 'CEO office',
      tags: 'Ceo,tag1, tag2',
      isLoggedUser: false,
      positionName: 'Linear Manager',
      id: 'O-6090',
      parentId: 'O-6071',
      size: 30,
    },
    {
      name: 'Peacock Margaret',
      img: 'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg',
      imgWidth: '40px',
      imgHeight: '40px',
      area: 'Corporate',
      profileUrl: 'http://example.com/employee/profile',
      office: 'CEO office',
      tags: 'Ceo,tag1, tag2',
      isLoggedUser: false,
      positionName: 'CEO',
      id: 'O-6091',
      parentId: 'O-6071',
      size: 30,
    },
  ];
  ngOnInit() {
    let prevIndex = 0;
    (data: any) => {
      data[prevIndex]._highlighted = false;
      let index = Math.floor(Math.random() * 10);
      prevIndex = index;
      data[index]._centered = true;
      data[index]._expanded = true;
      data[index]._highlighted = true;
      this.data = Object.assign([], this.data);
    };
  }
}
