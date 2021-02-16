import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localImage',
})
export class LocalImagePipe implements PipeTransform {
  public transform(path: string, ...args: any[]): string {
    return `./assets/images/${path}`;
  }
}
