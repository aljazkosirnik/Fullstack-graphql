import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml',
  pure: true,
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private readonly sanitizer: DomSanitizer) {}

  public transform(value: string, isHtml: boolean = false): SafeResourceUrl {
    return !!isHtml ? this.sanitizer.bypassSecurityTrustHtml(value) : this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }
}
