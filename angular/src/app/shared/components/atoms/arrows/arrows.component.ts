import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-arrows]',
  templateUrl: './arrows.component.html',
  styleUrls: ['./arrows.component.scss', './arrows-wcag.component.scss'],
})
export class ArrowsComponent implements OnInit {
  @Input() public modifier?: string;
  @Input() public direction?: string;
  @Input() public screenReaderText?: string;

  constructor() {}

  public ngOnInit(): void {}
}
