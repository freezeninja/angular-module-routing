import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.css']
})
export class SegmentComponent implements OnInit {
  @Input() header = true;
  constructor() { }

  ngOnInit(): void {
  }

}
