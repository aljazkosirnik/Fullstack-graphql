import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-title]',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss', './title-wcag.component.scss'],
})
export class TitleComponent implements OnInit {
  @Input() public font: string;
  @Input() public modifier: string;
  constructor() {}

  public ngOnInit(): void {}
}
