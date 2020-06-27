import {Component, Inject, Input, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, takeUntil} from 'rxjs/operators';
import {Contact} from '../../core/contact';
import {Presence} from '../../core/presence';
import {UnreadMessageCountPlugin} from '../../services/adapters/xmpp/plugins/unread-message-count.plugin';
import {ChatService, ChatServiceToken} from '../../services/chat-service';
import {RosterPlugin} from '../../services/adapters/xmpp/plugins/roster.plugin';

@Component({
    selector: 'ngx-chat-roster-contact',
    templateUrl: './roster-contact.component.html',
    styleUrls: ['./roster-contact.component.less']
})
export class RosterContactComponent implements OnInit, OnDestroy {

    @Input()
    contact: Contact;

    presence = Presence;

    unreadCount = 0;

    me;

    private ngDestroy = new Subject<void>();

    constructor(@Inject(ChatServiceToken) private chatService: ChatService) {
        this.chatService.getPlugin(UnreadMessageCountPlugin).jidToUnreadCount$
            .pipe(
                map(jidToUnreadCount => jidToUnreadCount[this.contact.jidBare.toString()] || 0),
                distinctUntilChanged(),
                debounceTime(100),
                takeUntil(this.ngDestroy),
            ).subscribe(unreadCount => this.unreadCount = unreadCount);
        this.chatService.getPlugin(UnreadMessageCountPlugin).onBeforeOnline();
        this.chatService.getPlugin(RosterPlugin).getRosterContacts();
    }

    ngOnInit() {
        this.chatService.getPlugin(UnreadMessageCountPlugin).jidToUnreadCount$
            .pipe(
                map(jidToUnreadCount => jidToUnreadCount[this.contact.jidBare.toString()] || 0),
                distinctUntilChanged(),
                debounceTime(100),
                takeUntil(this.ngDestroy),
            ).subscribe(unreadCount => this.unreadCount = unreadCount);
        this.chatService.getPlugin(UnreadMessageCountPlugin).onBeforeOnline();
        this.chatService.getPlugin(RosterPlugin).getRosterContacts();
        this.me = sessionStorage.getItem('username');
        console.log('prtty', this.me);

    }


    ngOnDestroy(): void {
        this.ngDestroy.next();
        this.ngDestroy.complete();
    }

}
