import { InjectionToken } from '@angular/core';
import { IEmailSender } from '../models/i-email-sender';

export const EMAIL_SENDER = new InjectionToken<IEmailSender>('EMAIL_SENDER');
