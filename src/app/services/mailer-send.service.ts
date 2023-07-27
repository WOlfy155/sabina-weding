import { inject, Injectable } from '@angular/core';
import { IEmailSender } from '../models/i-email-sender';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const TOKEN_PREFIX = 'Bearer ';

export interface EmailData {
  email: string,
  name?: string,
}

export interface EmailRequest {
  from: EmailData,
  to: EmailData[],
  subject: string,
  text: string,
}

@Injectable()
export class MailerSendService implements IEmailSender {

  private http = inject(HttpClient, {optional: true});

  send$(text: string): Observable<any> {

    const token = TOKEN_PREFIX + '';

    const headers = new HttpHeaders();
    headers.set('Authorization', token);

    const emailRequest = this.createEmailRequest(text)

    // @ts-ignore
    return this.http?.post?.('https://api.mailersend.com/v1/email', emailRequest, {
      headers
    });
  }

  private createEmailRequest(text: string):EmailRequest {
    return {
      from: {email: 'Sabina@mail.com', name: 'Sabina'},
      to: [{email: 'Sabina@mail.com', name: 'Sabina'}],
      subject: 'Приглашение на свадьбу',
      text,
    }
  }

}
