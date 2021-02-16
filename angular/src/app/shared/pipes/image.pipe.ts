import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '@env/environment';

@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {
  public transform(value: string): string {
    return `${environment.baseUrl}/storage/${value}`;
  }
}
