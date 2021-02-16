import { ErrorHandler, Injectable } from '@angular/core';
import { environment } from '@env/environment';
import * as Sentry from '@sentry/browser';

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() {}

  public handleError(error: any): any {
    // Throw error if application is set in production mode
    if (!!error && environment.production) {
      Sentry.captureException(error.originalError || error);
      throw error;
    }
  }
}

export function getErrorHandler(): ErrorHandler {
  if (environment.production) {
    // Sentry.init({ dsn: environment.sentryUrl });
    // return new SentryErrorHandler();
  }
  return new ErrorHandler();
}
