import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'backgroundImage',
})
export class BackgroundImagePipe implements PipeTransform {
  public transform(path: string, ...args: any[]): string {
    return `url(./assets/images/${path})`;
  }
}
