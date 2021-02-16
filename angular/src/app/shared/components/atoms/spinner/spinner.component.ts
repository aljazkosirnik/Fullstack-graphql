import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `
    <div class="spinner-wrapper" [ngClass]="color">
      <div class="spinner"></div>
    </div>
  `,
})
export class SpinnerComponent {
  @Input() public color?;
}
