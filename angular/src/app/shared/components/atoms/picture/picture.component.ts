import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss'],
})
export class PictureComponent implements OnInit {
  @Input() public sources: Array<any>;
  @Input() public img: string;
  @Input() public alt?: string;

  constructor() {}

  public ngOnInit(): void {}
}
