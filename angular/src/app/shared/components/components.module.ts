import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './atoms/button/button.component';
import { IconsComponent } from './atoms/icons/icons.component';
import { ArrowsComponent } from './atoms/arrows/arrows.component';
import { ImageAspectRatioComponent } from './atoms/image-aspect-ratio/image-aspect-ratio.component';
import { PipesModule } from '@shared/pipes/pipes.module';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { MarginComponent } from './atoms/margin/margin.component';
import { TitleComponent } from './atoms/title/title.component';
import { DropdownComponent } from './atoms/dropdown/dropdown.component';
import { CheckboxComponent } from './atoms/checkbox/checkbox.component';
import { PictureComponent } from './atoms/picture/picture.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './atoms/spinner/spinner.component';

@NgModule({
  declarations: [
    ButtonComponent,
    IconsComponent,
    ArrowsComponent,
    ImageAspectRatioComponent,
    MarginComponent,
    TitleComponent,
    DropdownComponent,
    CheckboxComponent,
    PictureComponent,
    SpinnerComponent,
  ],
  imports: [CommonModule, RouterModule, TranslateModule, PipesModule, SwiperModule, ReactiveFormsModule],
  exports: [ButtonComponent, IconsComponent, ArrowsComponent, MarginComponent, DropdownComponent, CheckboxComponent],
  providers: [],
})
export class ComponentsModule {}
