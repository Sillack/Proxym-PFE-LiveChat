import {animate, state, style, transition, trigger} from '@angular/animations';
import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Contact} from '../../core/contact';
import {ChatListStateService} from '../../services/chat-list-state.service';
import {ChatService, ChatServiceToken} from '../../services/chat-service';
import {ThemePalette} from '@angular/material/core';
import {Client} from '@xmpp/client';
import {LogService} from '../../services/log.service';
import {XmppChatAdapter} from '../../services/adapters/xmpp/xmpp-chat-adapter.service';
import {parse} from 'ltx';

@Component({
    selector: 'ngx-chat-roster-list',
    templateUrl: './roster-list.component.html',
    styleUrls: ['./roster-list.component.less'],
    animations: [
        trigger('rosterVisibility', [
            state('hidden', style({
                right: '-14em',
            })),
            state('shown', style({
                right: '0em',
            })),
            transition('hidden => shown', animate('400ms ease')),
            transition('shown => hidden', animate('400ms ease'))
        ]),
        trigger('drawerVisibility', [
            state('hidden', style({
                right: '0em',
            })),
            state('shown', style({
                right: '14em',
            })),
            transition('hidden => shown', animate('400ms ease')),
            transition('shown => hidden', animate('400ms ease'))
        ])
    ]
})
export class RosterListComponent implements OnInit {

    @Input()
    color: ThemePalette;

    @Input()
    rosterState: 'hidden' | 'shown';

    @Input()
    contacts: Observable<Contact[]>;

    @Input()
    contactRequestsReceived$: Observable<Contact[]>;

    @Input()
    contactRequestsSent$: Observable<Contact[]>;

    @Input()
    contactsUnaffiliated$: Observable<Contact[]>;

    hasNoContacts$: Observable<boolean>;

    @Output()
    rosterStateChanged: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    statusColor = '#69ca48';

    imgAway = require('../../../../../../../src/assets/away.png');
    imgAvailable = require('../../../../../../../src/assets/available.png');

    public otherJid: any;

    public client: Client;

    constructor(@Inject(ChatServiceToken) public chatService: ChatService,
                private chatListService: ChatListStateService, private logService: LogService,
                @Inject(ChatServiceToken) public chatServices: XmppChatAdapter) {
    }

    ngOnInit() {
        if (!this.contacts) {
            this.contacts = this.chatService.contactsSubscribed$;
        }
        if (!this.contactRequestsReceived$) {
            this.contactRequestsReceived$ = this.chatService.contactRequestsReceived$;
        }
        if (!this.contactRequestsSent$) {
            this.contactRequestsSent$ = this.chatService.contactRequestsSent$;
        }
        if (!this.contactsUnaffiliated$) {
            this.contactsUnaffiliated$ = this.chatService.contactsUnaffiliated$;
        }
        this.hasNoContacts$ = combineLatest([
            this.contacts,
            this.contactRequestsReceived$,
            this.contactRequestsSent$,
            this.contactsUnaffiliated$,
        ]).pipe(
            map(([contacts, received, sent, unaffiliated]) => contacts.length + received.length + sent.length + unaffiliated.length === 0)
        );
    }

    modo(value: string) {
        switch (value) {
            case '1':
                this.sendStanzaChat();
                this.statusColor = '#69ca48';
                break;
            case '2':
                this.sendStanzaAway();
                this.statusColor = '#ffbe00';
                break;
        }
    }

    onAddContact() {
        this.chatService.addContact(this.otherJid);
    }

    onRemoveContact() {
        this.chatService.removeContact(this.otherJid);
    }

    onClickContact(contact: Contact) {
        this.chatListService.openChat(contact);
    }

    public send(content: any): PromiseLike<void> {
        this.logService.debug('>>>', content);
        try {
            return this.client.send(content);
        } catch (e) {
            return Promise.reject(e);
        }
    }

    sendStanzaAway() {
        const request = parse('<presence><show>away</show></presence>');
        if (request) {
            return this.chatServices.chatConnectionService.send(request);
        }
    }

    sendStanzaDnd() {
        const request = parse('<presence><show>dnd</show></presence>');
        if (request) {
            return this.chatServices.chatConnectionService.send(request);
        }
    }

    sendStanzaChat() {
        const request = parse('<presence><show>chat</show></presence>');
        if (request) {
            return this.chatServices.chatConnectionService.send(request);
        }
    }

    toggleVisibility() {
        const newState = this.rosterState === 'shown' ? 'hidden' : 'shown';
        this.rosterStateChanged.emit(newState);
    }

}
