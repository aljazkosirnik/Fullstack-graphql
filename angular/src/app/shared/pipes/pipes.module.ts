import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalImagePipe } from './local-image.pipe';
import { ImagePipe } from './image.pipe';
import { BackgroundImagePipe } from './background-image.pipe';
import { SafeHtmlPipe } from './safe-html.pipe';

@NgModule({
  declarations: [LocalImagePipe, ImagePipe, BackgroundImagePipe, SafeHtmlPipe],
  imports: [CommonModule],
  exports: [],
})
export class PipesModule {}
