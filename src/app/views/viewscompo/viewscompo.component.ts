import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewscompo',
  templateUrl: './viewscompo.component.html',
  styleUrls: ['./viewscompo.component.css']
})
export class ViewscompoComponent implements OnInit {
 statistics = [
   {value: 30, label: '# of users'},
   {value: 45, label: 'Revenue'},
   {value: 456, label: 'Reviews'}
 ];

 itemList = [
   {imgurl: '../../../assets/img/operation.png', title: 'operation', desc: 'desc'},
   {imgurl: '/assets/img/report.png', title: 'report', desc: 'desc'},
   {imgurl: '/assets/img/report (1).png', title: 'Data Sheet', desc: 'desc'},
 ]
  constructor() { }

  ngOnInit(): void {
  }

}
