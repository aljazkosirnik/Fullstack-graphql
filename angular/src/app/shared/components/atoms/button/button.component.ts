import { Component, Input, OnInit } from '@angular/core';
import { ButtonType } from '@core/types/button.type';

@Component({
  selector: 'a[app-button], button[app-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss', './button-wcag.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() public dataPopup?: boolean;
  @Input() public modifier?: string;
  @Input() public size?: string;
  @Input() public buttonIcon?: string;
  @Input() public buttonType: ButtonType = 'primary';
  @Input() public isLoading = false;

  constructor() {}

  public ngOnInit(): void {}
}
