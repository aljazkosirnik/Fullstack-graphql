import { Component, OnInit, Input, ElementRef, Output, EventEmitter, OnDestroy } from '@angular/core';
import { filter, takeUntil } from 'rxjs/operators';
import { fromEvent, Subject } from 'rxjs';

@Component({
  selector: 'div[app-dropdown]',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss', './dropdown-wcag.component.scss'],
})
export class DropdownComponent implements OnInit, OnDestroy {
  private readonly unsubscribe$ = new Subject<boolean>();
  public isOpen: boolean;
  @Input() public required: boolean;
  @Input() public label: string;
  @Input() public placeholder: string;
  @Input() public blue = false;
  @Input() public additionalText: string; // Translate key
  @Input() public items: Array<any> = [];
  @Output() public selected: EventEmitter<string> = new EventEmitter<string>();

  constructor(private readonly ref: ElementRef) {}

  public ngOnInit(): void {
    fromEvent(document.body, 'click')
      .pipe(
        takeUntil(this.unsubscribe$),
        filter(({ target }: Event) => !this.ref.nativeElement.contains(target)),
      )
      .subscribe(() => (this.isOpen = false));
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next(true);
  }

  public select(text: any): void {
    this.placeholder = text;
    this.selected.emit(text);
  }
}
