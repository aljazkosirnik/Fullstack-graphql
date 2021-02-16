import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: '[app-checkbox]',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss', './checkbox-wcag.component.scss'],
})
export class CheckboxComponent implements OnInit {
  @Input() public name: string;
  @Input() public id: string;
  @Input() public label: string;
  @Input() public required = false;
  @Input() public form: FormGroup;
  @Input() public value: boolean;
  @Output() public valueChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  public ngOnInit(): void {}

  public checked(value: boolean): void {
    this.valueChange.emit(value);
  }
}
