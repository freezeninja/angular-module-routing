import { AbstractJsEmitterVisitor } from '@angular/compiler/src/output/abstract_js_emitter';
import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  // headerData = [
  //   {key:'name', label: 'Name'},
  //   {key:'salary', label: 'Salary'},
  //   {key:'job', label: 'Job'}
  // ]
  // tableData = [
  //   {name: 'Arijit', salary: 10, job: 'Developer', Id: 4565},
  //   {name: 'Rahul',salary: 5, job: 'Designer', Id: 556}
  // ]


  @Input () tableData: any = [];
  @Input() headerData: any = [];
  @Input('class') className: any = '';
  constructor() { }

  ngOnInit(): void {
  }

}
