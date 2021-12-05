import { componentFactoryName } from '@angular/compiler';
import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {


  constructor(private el: ElementRef) {
    // console.log(this.el.nativeElement);
   }


  //  appending the root element of modal component, directly into our body 
  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement)
  }

}
