import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'div[app-image-aspect-ratio]',
  templateUrl: './image-aspect-ratio.component.html',
  styleUrls: ['./image-aspect-ratio.component.scss'],
})
export class ImageAspectRatioComponent implements OnInit {
  private element;
  private img;
  private src;

  @Input() public imageUrl?: string;
  @Input() public imageAlt?: string;
  @Input() public modifier?: string;
  @Input() public localImage? = false;

  constructor(private readonly elm: ElementRef) {}

  public ngOnInit(): void {
    this.element = this.elm.nativeElement.querySelector('[data-responsive="responsive-bg-image"]');
    this.img = this.element.querySelector('img');
    this.src = '';

    this.img.addEventListener('load', () => this.update());
  }

  private update(): void {
    const src = typeof this.img.currentSrc !== 'undefined' ? this.img.currentSrc : this.img.src;
    if (this.src !== src) {
      this.src = src;
      this.element.style.backgroundImage = `url("${this.src}")`;
    }
  }
}
