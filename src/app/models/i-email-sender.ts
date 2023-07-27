import { Observable } from 'rxjs';

export interface IEmailSender {
  send$(body: string): Observable<any>;
}
