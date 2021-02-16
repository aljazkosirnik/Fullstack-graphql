import { TranslateLoader } from '@ngx-translate/core';
import { from, Observable } from 'rxjs';

export class WebpackTranslateLoader implements TranslateLoader {
  public getTranslation(lang: string): Observable<any> {
    return from(import(`../../../i18n/${lang}/trans.json`));
  }
}

export const translateConfig = {
  loader: {
    provide: TranslateLoader,
    useClass: WebpackTranslateLoader,
  },
};
