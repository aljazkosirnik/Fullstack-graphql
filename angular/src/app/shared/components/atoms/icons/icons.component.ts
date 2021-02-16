import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-icons]',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss', './icons-wcag.component.scss'],
})
export class IconsComponent implements OnInit {
  @Input() public modifier: string;

  constructor() {}

  public ngOnInit(): void {}
}
