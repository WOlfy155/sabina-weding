import { Component, ElementRef, inject, QueryList, ViewChildren } from '@angular/core';
import { EMAIL_SENDER } from './injection-tokens/injection-tokens';
import { take } from 'rxjs';
import { MailerSendService } from './services/mailer-send.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {provide: EMAIL_SENDER, useClass: MailerSendService}
  ]
})
export class AppComponent {

  private emailSenderService = inject(EMAIL_SENDER);

  private scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        return;
      }
      entry.target.classList.remove('appear');
    });
  });

  @ViewChildren('scrollBlock', {read: ElementRef}) set scrollBlocks(blocks: QueryList<ElementRef<HTMLElement>>) {
    blocks.forEach(block => this.scrollObserver.observe(block.nativeElement));
  }

  send() {
    this.emailSenderService.send$('text').pipe(take(1)).subscribe()
  }

}
