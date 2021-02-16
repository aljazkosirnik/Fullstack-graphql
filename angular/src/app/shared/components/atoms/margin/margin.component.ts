import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-margin',
  templateUrl: './margin.component.html',
  styleUrls: ['./margin.component.scss'],
})
export class MarginComponent implements OnInit {
  @Input() public marginSize?: string;

  constructor() {}

  public ngOnInit(): void {}
}
