import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collectioncompo',
  templateUrl: './collectioncompo.component.html',
  styleUrls: ['./collectioncompo.component.css']
})
export class CollectioncompoComponent implements OnInit {
  headerData = [
    {key:'name', label: 'Name'},
    {key:'salary', label: 'Salary'},
    {key:'job', label: 'Job Role'},
    {key:'experience', label:'Experience in months'}
  ]
  tableData = [
    {name: 'Arijit', salary: 10, job: 'Developer', Id: 4565, experience: 6},
    {name: 'Rahul',salary: 5, job: 'Designer', Id: 556, experience: 10}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
